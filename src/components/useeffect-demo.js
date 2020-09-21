import React,{useEffect,useState} from 'react';

export default function UseEffectDemo(props){


    const[count,setCount]=useState(0);
    const [notice, setNotice] = useState("");
    //1. This will run always
    useEffect(()=> {
        console.log("1. run always:useEffect:fired")
        return () => {
            console.log("1. Do cleanup here ");

        }
    })

     // 2. This will only run once, first time.
    useEffect(() => {
     console.log("2. run only once first time");

        let interval = setTimeout(() => {
            setNotice("NOTICE: A new announcement has been posted!")
         }, 2000)

        return () => {
      // Cleanup
         clearInterval(interval);
        }

     },[]) // Pass empty dependencies array here
     useEffect(() => {
        console.log("2.1. run only once");
        let interval = setTimeout(() => {
          setNotice("")
        }, 3000)
    
        return () => {
          // Cleanup
          clearInterval(interval);
        }
    
      },[])  // Pass empty dependencies array here
      
    
      // 3. Run when dependency changes.
      useEffect(() => {
        console.log(`This is fired now as ${notice} changed....`);
      }, [notice])
    
      useEffect(() => {
        console.log(`This is fired when 'notice' or 'count' is changed....`);
      }, [notice, count])
    return(
        <div>
            <h2 className="text-center">UseEffect Demo</h2>
            { notice.length > 0 && <h4 className="text-info">{notice}</h4>}
            <h2>Count: {count}</h2>
            <button onClick={()=> setCount(count+1)} className="btn btn-outline-primary btn-large">increase</button>
            <button onClick={()=> setCount(count-1)} className="btn btn-outline-danger btn-large">decrease</button>
        </div>
    )
}