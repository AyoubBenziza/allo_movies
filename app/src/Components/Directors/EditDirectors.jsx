import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const apiDirectors = "http://localhost:3001/directors";

export default function EditDirectors(){
    
    let [director, setDirector] = React.useState({
    })

    let [showList, setShowList] = React.useState(false);
    
    const params=useParams();

    const getDirector = (id) => {
        axios.get(apiDirectors+"/"+id)
        .then(response => {
            let updatedDirector = response.data[0];
            setDirector(updatedDirector);
            setShowList(true);
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    const updateDirector = (event,id) => {
        event.preventDefault();
        setShowList(false);
        axios.put(apiDirectors+"/"+id,director)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
        setDirector({});
    }

    const handleChange = (event) => {
        setDirector({...director,[event.target.name] : event.target.value});
        console.log(director);
    };

    const formatData = () => {
                
            
            return (
                <section>
                    <h1>PUT</h1>
                    <form onSubmit={event => updateDirector(event,params.id)}>
                        <input type="text" id='name_director' name='name_director' value={director.name_director} onChange={handleChange}/>
                        <input type="date" id='birth_director' name='birth_director' value={director.birth_director} onChange={handleChange}/>
                        <input type="text" id='pic_director' name='pic_director' value={director.pic_director} onChange={handleChange}/>
                        <button type='submit'>Update</button>
                    </form>
                </section>
            );
    };
    React.useEffect(() =>{
        if(Object.keys(director).length===0){
            getDirector(params.id);
        }
    })
    

    return(
        <div>
            {showList ? formatData() : null}
        </div>
    );
}