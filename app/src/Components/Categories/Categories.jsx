import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const apiCategories = "http://localhost:3001/categories";

class Categories extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            categories: [],
            showForm : false,
            showList : false,
            name_category: ""
        }
    }

    getAllCategories = (event) => {
        axios.get(apiCategories)
        .then(response => {
            this.setState({categories : response.data, showList : true, showForm : false});
            this.formatData();
        })
        .catch(error => {
            console.log(error.message);
        });
    }
    

    createPost = (event) => {
        event.preventDefault();
        this.setState({ showList: false, categories: [] });
        axios.post(apiCategories,{
            name_category : this.state.name_category
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
        this.getAllCategories();
    }

    deleteCategory = (event, id) => {
        event.preventDefault();
        this.setState({ showList: false, categories: [] });
        axios.delete(apiCategories+"/"+id)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        });
        this.getAllCategories();
    }

    formatData = () => {
        let categoriesList = this.state.categories.map((category, index) => {
            return (
                <tr key={index}>
                    <td className='category'>
                        <h3>{category.name_category}</h3>
                    </td>
                    <td>
                        <div className='buttonList'>
                            <button className='detail'><Link to={"/categories/detail/"+category.id_category}>Detail</Link></button>
                            <button className='edit'><Link to={"/categories/edit/"+category.id_category}>Edit</Link></button>
                            <button className='delete' onClick={event => this.deleteCategory(event,category.id_category)}>Supprimer</button>
                        </div>
                    </td>
                </tr>
            );
        });
        return categoriesList;
    }

    form = () => {
        return (<form onSubmit={this.createPost}>
            <input type='text' id='name_category' name='name_category' value={this.state.name_category} onChange={this.handleChange}/>
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
        this.getAllCategories();
    }

    render(){

        return (
            <section>
                <header><h1>Categories</h1></header>
                <h1>❏Liste des catégories❏</h1>
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

export default Categories;