import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const apiMovies = "http://localhost:3001/movies";

class Movies extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            movies: [],
            showList : false,
            showForm : false,
            title_movie: "",
            duration_movie: "",
            year_movie: "",
            synopsis_movie: "",
            director_movie: "1",
        }
    }

    getAllMovies = (event) => {
        axios.get(apiMovies)
        .then(response => {
            this.setState({movies : response.data, showList : true, showForm : false});
            this.formatData();
        })
        .catch(error => {
            console.log(error.message);
        });
    }
    

    createPost = (event) => {
        event.preventDefault();
        this.setState({showList: false, movies : []});
        axios.post(apiMovies,{
            title_movie : this.state.title_movie,
            duration_movie : this.state.duration_movie,
            year_movie : this.state.year_movie,
            synopsis_movie : this.state.synopsis_movie,
            director_movie : this.state.director_movie
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
        this.setState({
            title_movie : "",
            duration_movie : "",
            year_movie : "",
            synopsis_movie : "",
            director_movie : "1"
        })
        console.log(this.state.movies);
        this.getAllMovies();
    }

    deleteMovie = (event, id) => {
        event.preventDefault();
        this.setState({showList : false, movies : []});
        axios.delete(apiMovies+"/"+id)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
        this.getAllMovies();
    }

    formatData = () => {
        let moviesList = this.state.movies.map((movie, index) => {
            return (
                <tr key={index}>
                    <td className='movie'>
                        <h3>{movie.title_movie}</h3>
                    </td>
                    <td>
                        <div className='buttonList'>
                            <button className='detail'><Link to={"/movies/detail/"+movie.id_movie}>Detail</Link></button>
                            <button className='edit'><Link to={"/movies/edit/"+movie.id_movie}>Edit</Link></button>
                            <button className='delete' onClick={event => this.deleteMovie(event,movie.id_movie)}>Supprimer</button>
                        </div>
                    </td>
                </tr>
            );
        });
        return moviesList;
    };

    form = () => {
        return (<form onSubmit={this.createPost}>
                <label htmlFor='title_movie'>Title:</label>
                <input type='text' id='title_movie' name='title_movie' placeholder="Fast and Furious" value={this.state.title_movie} onChange={this.handleChange} required/>
                <label htmlFor='duration_movie'>Time:</label>
                <input type='number' id='duration_movie' name='duration_movie' placeholder="150" value={this.state.duration_movie} onChange={this.handleChange} required/>
                <label htmlFor='year_movie'>Year:</label>
                <input type='number' id='year_movie' name='year_movie' min={1800} max={2023} placeholder="2002" value={this.state.year_movie} onChange={this.handleChange} required/>
                <label htmlFor='synopsis_movie'>Synopsis:</label>
                <input type='text' id='synopsis_movie' name='synopsis_movie' placeholder="Il était une fois..." value={this.state.synopsis_movie} onChange={this.handleChange} required/>
                <label htmlFor='director_movie'>Director:</label>
                <select id='director_movie' value={this.state.director_movie} name='director_movie' onChange={this.handleChange} required>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
                <button type='submit'>Créer</button>
            </form>
        );
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
        console.log(this.state);
    }

    handleForm = () => {
        this.setState({showForm : true});
    }

    componentDidMount(){
        this.getAllMovies();
    }

    render(){

        return (
            <section>
                <header><h1>Movies</h1></header>
                <h1>🎞Liste des films🎞</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {this.state.showForm ? this.form() : <button className='add' onClick={this.handleForm}>Add</button>}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.showList ? this.formatData() : null}
                    </tbody>
                </table>
            </section>
        );
    }
}

export default Movies;