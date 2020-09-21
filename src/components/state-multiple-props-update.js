import React, {useState} from 'react';

export default function MultipleStatePropsUpdate() {
  const [appState, setState] = useState({
    isLoading:false,
    isUpdated: false,
    error: "",
    counter: 0
  })

  const incr = () => {
    if (appState.error.trim() != "") {
        setState({
            ...appState,  
            error: ""     
          })
        }

        setState({
            ...appState,
            isLoading: true,
          })
      
          setTimeout(() => {
            setState((prevState) => {
                return {
                 ...prevState,
                 counter: prevState.counter + 1,
                 isLoading: false,
                 isUpdated: true,
                 error:""
                }
              });
       
              setState((prevState) => {
                return {
                 ...prevState,
                 counter: prevState.counter + 1,
                 isLoading: false,
                 isUpdated: true
                }
              });
       
           }, 3000);
         }
         const decr = () => {
            if (appState.counter == 0) {
             
              setState({
                ...appState,
                error: "Counter should not be negative!"
              })
              return;
            }
            // setCounter(counter - 1);
            setState({
              ...appState,
              counter: appState.counter - 1
            })
        
          }
          
          return (
            <div>
              <h2 className="text-center">Counter Multiple Props State</h2>
              <h6 className="text-info">Counter is updated after 3 seconds!  We can make the code better
                using useReducer
              </h6>
              {
                appState.error.length > 0 && <div className="error">{appState.error}</div>
              }
              
              <h2>{appState.counter}</h2>
        
              {appState.isLoading && <h4>Loading....</h4>}
              {appState.isUpdated && <h4>Counter successfully updated!!</h4>}
              
              <button onClick={incr}  className="btn btn-outline-primary btn-large">increase</button>
              <button onClick={decr} className="btn btn-outline-danger btn-large">decrease</button>
            </div>
          )
        }