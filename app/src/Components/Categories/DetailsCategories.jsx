import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const apiCategories = "http://localhost:3001/categories";

export default function DetailsCategories(props){

    const params = useParams();
    
    let [categories, setCategories] = React.useState([]);
    let [showList, setShowList] = React.useState(false);

    const getCategory = (id) => {
        axios.get(apiCategories+"/"+id)
        .then(response => {
            setCategories(response.data);
            setShowList(true);
            formatData();
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    const formatData = () => {
        let categoriesList = categories.map((category, index) => {
            return (
                <section key={index}>
                    <h3>{category.name_category}</h3>
                    <p>Id: {category.id_category}</p>
                </section>
            );
        });
        return categoriesList;
    };

    React.useEffect(() => {
        getCategory(params.id);
    })

    return(
    <div>
        {showList ? formatData() : null}
    </div>
    );   
}