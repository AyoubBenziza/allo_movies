import React from 'react'
import './App.css';

class App extends React.Component{
  state = {
    isClicked: false
  }

  // On crée une méthode qui retourne un paragraphe avec notre contenu en paramètre
  methodComponent(value){
    return <p>{value}</p>;
  };

  handlerClick(){
    this.setState({isClicked: !this.state.isClicked})
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
        <button onClick={this.handlerClick.bind(this)}>Click Me(bind)</button>
        <button onClick={()=>this.handlerClick()}>Click Me</button>
      </div>
    );
  }
}

export default App;
