import React from 'react'
import './App.css';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';

const App = props => {

  let [tasks, setTasks] = React.useState([
    {id:1,name:"Faire le ménage"},
    {id:2,name:"Faire la vaisselle"},
    {id:3,name:"Sortir le chien"},
    {id:4,name:"Jouer"}
  ]);

  const handleDelete = (id) => {
    // console.log(id);

    // Copie de la propriété tasks dans state
    let updatedTasks = [...tasks];
    // Recherche de l'index de l'élément à supprimer
    let taskId = updatedTasks.findIndex((elem) => elem.id === id);
    // Suppression de l'élément à l'index de taskId
    updatedTasks.splice(taskId,1);
    // Mis à jour de la propriété tasks dans state
    setTasks(updatedTasks);
  }

  const handlerAdd = (value) => {
    // Copie de la propriété tasks dans state
    let updatedTasks = [...tasks];
    // Recherche de l'index de l'élément à supprimer
    updatedTasks.push({id:Date.now,name:value})
    // Mis à jour de la propriété tasks dans state
    setTasks(updatedTasks);
  }

    return (
      <div>
        <h1>Corvées à effectuer</h1>
        <TaskList pList={tasks} onDel={handleDelete} />
        <hr/>
        <h1>Formulaire</h1>
        <TaskForm onAdd={handlerAdd}/>
      </div>
    );
}

export default App;
