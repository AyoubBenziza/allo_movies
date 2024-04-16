import React from 'react'
import './App.css';
import LifeCycleClass from './Components/LifeCycleClass';

class App extends React.Component{
  state = {
    isClicked: false
  }

  handlerClick= (event)=>{
    this.setState({isClicked: !this.state.isClicked});
    // console.log(event.target.id);
  }

  // Function qui effectue l'affichage de notre contenu
  render(){
    const myStyle = this.state.isClicked ? "txt-green" : "txt-red";
    const title = <h1 className={myStyle}>Hello Worlds</h1>;

    return (
      <div>
        {/* Pour appeler une variable dans du html il faut la mettre entre {} */}
        {title}
        <button id="myBtn" onClick={this.handlerClick}>Click Me</button>
        {this.state.isClicked ? <LifeCycleClass value={"TRUE"} /> : <LifeCycleClass value={"False"}/>}
      </div>
    );
  }
}

export default App;
