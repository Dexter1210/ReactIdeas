import React, {useState} from 'react';

export default function MultipleStateUpdate() {
  const [counter, setCounter] = useState(0); 
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdated, setIsUpdating] = useState(false);

  const incr=() => {
      if(error.trim()!=""){
          setError("");
      }
  

  setIsLoading((prevValue)=>true);
  setTimeout(() => {
      setCounter((prevState)=>prevState+1);
      //setCounter((prevState)=>prevState+1);
      //setCounter((prevState)=>prevState+1);

      setIsLoading((_)=>false);
      setIsUpdating((_)=>true);
  },3000);
}

const decr = () => {
    if (counter == 0) {
      setError("Counter should not be negative!");
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <div class="container-fluid">
      <h2 class="text-center">Counter Multiple State</h2>
      <h6 class="text-info">Counter is updated after 3 seconds!!
      </h6>
      {
        error.length > 0 && <div className="error">{error}</div>
      }
      
      <h2>{counter}</h2>

      {isLoading && <h4>Loading....</h4>}
      {isUpdated && <h4>Counter successfully updated!!</h4>}
      
      <button onClick={incr} className="btn btn-outline-primary btn-large">increase</button>
      <button onClick={decr} className="btn btn-outline-danger btn-large">decrease</button>
    </div>
  )

}