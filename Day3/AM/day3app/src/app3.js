//Input updated as you type
import { useState } from 'react';
import './App.css';

const App = () => {

  const [inputText, setInputText] = useState("");

  const changeHandler = (event) => {
    // console.log(event.target.value);
    setInputText(event.target.value);
  }
// as you type each character or button pressed is displayed
  return (
    <div>     
      <input type="text" onChange={changeHandler}></input>
      <h1>{inputText}</h1>
    </div>
  );
}

export default App;