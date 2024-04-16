import React from 'react'
import axios from 'axios'
import './App.css';

const apiUrl = "https://random-data-api.com/api/v2/users?size=9";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    axios.get(apiUrl).then(response => {
      this.setState({users: response.data});
    })
    .catch(error => {
      console.log(error.message);
    });
  }

  render(){

    let usersList = this.state.users.map((user, index) => {
      return (
        <div key={index}>
          <h3>{user.last_name+ " " + user.first_name}</h3>
          <p>{user.email}</p>
          <img src={user.avatar} width="300" height="200"/>
        </div>
      );
    });

    return (
      <div>
        <h1>User List</h1>
        {usersList}
      </div>
    );
  }
}

export default App;
