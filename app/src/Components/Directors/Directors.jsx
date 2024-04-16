import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const apiDirectors = "http://localhost:3001/directors";

class Directors extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            directors: [],
            showForm : false,
            showList : false,
            name_director: "",
            birth_director: "",
            pic_director: ""
        }
    }

    getAllDirectors = (event) => {
        axios.get(apiDirectors).then(response => {
            this.setState({directors : response.data,showList : true,showForm : false});
        })
        .catch(error => {
            console.log(error.message);
        });
    }
    

    createPost = (event) => {
        event.preventDefault();
        this.setState({ showList: false, birth_director: new Date(this.state.birth_director).toLocaleDateString() });
        axios.post(apiDirectors,{
            name_director: this.state.name_director,
            birth_director: this.state.birth_director,
            pic_director: this.state.pic_director
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
        this.getAllDirectors();
    }

    deleteDirector = (event, id) => {
        event.preventDefault();
        this.setState({directors : [], showList : false});
        axios.delete(apiDirectors+"/"+id)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
        this.getAllDirectors();
    }

    formData = () => {
        let directorsList = this.state.directors.map((director, index) => {
            return (
                <tr key={index}>
                    <td className='director'>
                        <h3>{director.name_director}</h3>
                    </td>
                    <td>
                        <div className='buttonList'>
                            <button className='detail'><Link to={"/directors/detail/"+director.id_director}>Detail</Link></button>
                            <button className='edit'><Link to={"/directors/edit/"+director.id_director}>Edit</Link></button>
                            <button className='delete' onClick={event => this.deleteDirector(event,director.id_director)}>Supprimer</button>
                        </div>
                    </td>
                </tr>
            );
        });
        return directorsList;
    }

    form = () => {
        return (<form onSubmit={this.createPost}>
            <label htmlFor='name_director'>Name:</label>
            <input type='text' id='name_director' name='name_director' placeholder="Michel Dupont" value={this.state.name_director} onChange={this.handleChange} required/>
            <label htmlFor='birth_director'>BirthDate</label>
            <input type='date' id='birth_director' name='birth_director' value={this.state.birth_director} onChange={this.handleChange}/>
            <label htmlFor='pic_director'>Image(url):</label>
            <input type='text' id='pic_director' name='pic_director' placeholder="https://devenir-realisateur.com/wp-content/uploads/2020/07/923534-alfred-hitchcock-e1473805145676.jpg" value={this.state.pic_director} onChange={this.handleChange} required/>
            
            <button type='submit'>Créer</button>
        </form>);
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
        console.log(this.state);
    }

    handleForm = () => {
        this.setState({showForm : true});
    }

    componentDidMount(){
        this.getAllDirectors();
    }

    render(){

        return (
            <section>
                <header><h1>Directors</h1></header>
                <h1>✮Liste des réalisateurs✮</h1>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {this.state.showForm ? this.form() : <button className='add' onClick={this.handleForm}>Add</button>}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.showList ? this.formData() : null}
                    </tbody>
                </table>
            </section>
        );
    }
}

export default Directors;