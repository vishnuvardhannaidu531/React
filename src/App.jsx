import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <p>This Counter for the react app</p>
  //     <h1>Counter:{count}</h1>
  //     <button onClick={()=>setCount(0)}>Increment</button>
  //     <button onClick={()=>setCount(count-1)}>Decrement</button>
  //   </>
  // )
  const [count,setcount]=useState([10,20,30]);

  function handlechange(){
    // count.push(40);
    // setcount(count);
    setcount([...count,40])
  }
  return(
    <>
    <p>The counter for the react app</p>
    <h1>Counter : {count}</h1>
    <button onClick={handlechange}>Increment</button>
    </>
  );
}

export default App
