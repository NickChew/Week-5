import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {

  const [inputText, setInputText] = useState("");

  const changeHandler = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  }

  return (
    //ghost div
    <>  
      <input type="text" onChange={changeHandler}></input>
      <h1>{inputText}</h1>
    </>
  );
}

export default App;