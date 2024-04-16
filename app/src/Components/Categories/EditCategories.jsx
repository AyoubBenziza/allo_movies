import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const apiCategories = "http://localhost:3001/categories";

export default function EditCategories(){
    
    let [category, setCategory] = React.useState({});

    let [showList, setShowList] = React.useState(false);
    
    const params=useParams();

    const getCategory = (id) => {
        axios.get(apiCategories+"/"+id)
        .then(response => {
            let updatedCategory = response.data[0];
            setCategory(updatedCategory);
            setShowList(true);
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    const updateCategory = (event,id) => {
        event.preventDefault();
        setShowList(false);
        axios.put(apiCategories+"/"+id,category)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
        setCategory({});
    }

    const handleChange = (event) => {
        setCategory({...category,[event.target.name] : event.target.value});
        console.log(category);
    };

    const formatData = () => {
                
            
            return (
                <section>
                    <h1>PUT</h1>
                    <form onSubmit={event => updateCategory(event,params.id)}>
                        <input type="text" id='name_category' name='name_category' value={category.name_category} onChange={handleChange} required/>
                        <button type='submit'>Update</button>
                    </form>
                </section>
            );
    };
    React.useEffect(() =>{
        if(Object.keys(category).length===0){
            getCategory(params.id);
        }
    })
    

    return(
        <div>
            {showList ? formatData() : null}
        </div>
    );
}