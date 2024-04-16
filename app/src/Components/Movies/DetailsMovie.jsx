import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const apiMovies = "http://localhost:3001/movies";

export default function DetailsMovie(props){

    const params = useParams();
    
    let [movies, setMovies] = React.useState([]);
    let [showList, setShowList] = React.useState(false);

    const getMovie = (id) => {
        axios.get(apiMovies+"/"+id)
        .then(response => {
            setMovies(response.data);
            setShowList(true);
            formatData();
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    const formatData = () => {
        let moviesList = movies.map((movie, index) => {
            return (
                <section key={index}>
                    <h3>{movie.title_movie}</h3>
                    <p>Durée: {movie.duration_movie}</p>
                    <p>Année de parution: {movie.year_movie}</p>
                    <p>Synopsis: {movie.synopsis_movie}</p>
                    <p>Id du directeur: {movie.director_movie}</p>
                </section>
            );
        });
        
        return moviesList;
    };

    React.useEffect(() => {
        getMovie(params.id);
    })

    return(
    <div>
        {showList ? formatData() : null}
    </div>
    );   
}