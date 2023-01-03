// adds a number to the array on click

import { useState } from 'react';
import './App.css';
//  the variable that holds the current state 'numbers', a method used to update state- 'setNumbers', usestate is the hook
const App = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const handleAddNumber = () => {
      let numberCopy = [...numbers]; // copy or clone of the array using spread, numberCopy allows us to manipulate array
      numberCopy.push(numberCopy[numberCopy.length -1] +1); //adds +1 to array on button click
      setNumbers(numberCopy); //setNumbers is the state function, and updates numbers with numbercopy(array)
      console.log("Add number here");
  };

  return (
    <div>
      {numbers.map((number, index) => { // goes through each item of the array numbers, by item number using the index(location in array) 
        return <p key={index}>{number}</p> // p tag displays number from item array and stores index of item in 'key' not the contents of number
      })};
      <button onClick={handleAddNumber}>Add Number</button>
    </div>
  );
};

export default App;