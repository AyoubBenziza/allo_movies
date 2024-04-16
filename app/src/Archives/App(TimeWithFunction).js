import React from 'react'
import './App.css';
import Clock from './Components/Clock';

function App(){
  let [isClicked, setIsClicked] = React.useState(false);

  const handlerClick = (event) =>{
    setIsClicked(!isClicked);
    console.log("Button Id:", event.currentTarget.id);
  }

  const myStyle = isClicked ? "txt-green" : "txt-red";
  const title = <h1 className={myStyle}>Hello Worlds</h1>;

  return (
    <div>
      {/* Pour appeler une variable dans du html il faut la mettre entre {} */}
      {title}
      <button id="myBtn" onClick={handlerClick}>Click Me</button>
      {isClicked ? <Clock /> : null}
    </div>
  );
}

export default App;
