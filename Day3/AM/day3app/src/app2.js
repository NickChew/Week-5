//Clicking a p tag to remove

import { useState } from 'react';
import './App.css';

const App = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const removeHandler = (index) => {
    let numberCopy = [...numbers]; // copy or clone of the array, numberCopy allows us to manipulate array
    numberCopy.splice(index, 1); // removes elements from array at location 'index' by '1' 
    setNumbers(numberCopy); //setNumbers is the state function, and updates numbers with numbercopy(array)
  }

  return (
    <div>
      {numbers.map((number, index) => { // goes through each item of the array numbers, by item number using the index(location in array)
        return <p key={index} onClick={() => removeHandler(index)}>{number}</p> 
        // p tag displays number from item array and stores index of item in 'key' not the contents of number, 
        // onclick runs removehandler which removes last number via index location (in line annonymous function)
        // doesnt run unless clicked.
      })};
    </div>
  );
};

export default App;