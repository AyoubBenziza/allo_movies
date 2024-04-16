import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const apiMovies = "http://localhost:3001/movies";

export default function EditMovies(){
    
    let [movie, setMovie] = React.useState({
    })

    let [showList, setShowList] = React.useState(false);
    
    const params=useParams();

    const getMovie = (id) => {
        axios.get(apiMovies+"/"+id)
        .then(response => {
            let updatedMovie = response.data[0];
            setMovie(updatedMovie);
            setShowList(true);
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    const updateMovie = (event,id) => {
        event.preventDefault();
        setShowList(false);
        axios.put(apiMovies+"/"+id,movie)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
        setMovie({});
    }

    const handleChange = (event) => {
        setMovie({...movie,[event.target.name] : event.target.value});
        console.log(movie);
    };

    const formatData = () => {
                
            
            return (
                <section>
                    <h1>PUT</h1>
                    <form onSubmit={event => updateMovie(event,params.id)}>
                        <input type="text" id='title_movie' name='title_movie' value={movie.title_movie} onChange={handleChange}/>
                        <input type="number" id='duration_movie' name='duration_movie' value={movie.duration_movie} onChange={handleChange}/>
                        <input type="number" id='year_movie' name='year_movie' value={movie.year_movie} onChange={handleChange}/>
                        <input type="text" id='synopsis_movie' name='synopsis_movie' value={movie.synopsis_movie} onChange={handleChange}/>
                        <select id='director_movie' name='director_movie' value={movie.director_movie} onChange={handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <button type='submit'>Update</button>
                    </form>
                </section>
            );
    };
    React.useEffect(() =>{
        if(Object.keys(movie).length===0){
            getMovie(params.id);
        }
    })
    

    return(
        <div>
            {showList ? formatData() : null}
        </div>
    );
}