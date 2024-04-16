import React from 'react'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props); // Call parent constructor
    this.state = {
      isClicked: false
    }
    this.handlerClick = this.handlerClick.bind(this);
  }

  // On crée une méthode qui retourne un paragraphe avec notre contenu en paramètre
  methodComponent(value){
    return <p>{value}</p>;
  };

  handlerClick(){
    this.setState({isClicked: !this.state.isClicked});
  }

  // Function qui effectue l'affichage de notre contenu
  render(){
    const myStyle = this.state.isClicked ? "txt-green" : "txt-red";
    const title = <h1 className={myStyle}>Hello Worlds</h1>;
    const lines = [
      <p key={0}>Text line 1</p>,
      <p key={1}>Text line 2</p>,
      <p key={2}>Text line 3</p>
    ];

    return (
      <div>
        {/* Pour appeler une variable dans du html il faut la mettre entre {} */}
        {title}
        <p>Welcome</p>
        {lines}
        {this.methodComponent("Component Value")}
        <button id="myBtn" onClick={this.handlerClick}>Click Me</button>
      </div>
    );
  }
}

export default App;
