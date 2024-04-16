import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const apiDirectors = "http://localhost:3001/directors";

export default function DetailsDirectors(props){

    const params = useParams();
    
    let [directors, setDirectors] = React.useState([]);
    let [showList, setShowList] = React.useState(false);

    const getDirector = (id) => {
        axios.get(apiDirectors+"/"+id)
        .then(response => {
            setDirectors(response.data);
            setShowList(true);
            formatData();
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    const formatData = () => {
        let directorsList = directors.map((director, index) => {
            return (
                <section key={index}>
                    <h3>{director.name_director}</h3>
                    <p>Année de naissance: {new Date(director.birth_director).toLocaleDateString('fr-FR',"dd/mm/yyyy")}</p>
                    <img src={director.pic_director}/>
                </section>
            );
        });
        return directorsList;
    };

    React.useEffect(() => {
        getDirector(params.id);
    })

    return(
    <div>
        {showList ? formatData() : null}
    </div>
    );   
}