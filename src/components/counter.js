

import React, {useState} from 'react';



export default function Counter() {
  //alert("Function called!");
  // const counterResult = useState(0);
  // const counter = counterResult[0];
  // const setCounter = counterResult[1];
  
  const [counter, setCounter ] = useState(0) ;
  const [error, setError ] = useState(undefined) ; // [stateValue, updaterFunction]
  
  function onIncrement () {
    //counter = counter + 1;   // WILL NOT WORK

    if(error)
        setError(undefined);
    
    setCounter(counter + 1);
  }
  
  function onDecrement () {
    if(counter>0)
      setCounter(counter - 1);
    else
        //alert("Counter can't be less than zero");
        setError("Counter can't be negative!!");
   
  }
  
  return (
    <div className="container">
      <h1 class="text-center">Counter</h1>
      <h4 class="text-danger">{error}</h4>
      <hr/>
      <div className="d-flex justify-content-between">
        <button onClick={onIncrement} className="btn btn-outline-primary btn-large">increase</button>
        <h2>{counter}</h2>
        <button onClick={onDecrement} className="btn btn-outline-danger btn-large">decrease</button>
      </div>
    </div>
  )
}


