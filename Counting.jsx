import { useState } from "react";

function Counting({name}){
    const [count, setcount] = useState(0);

    function handlechange(){
        setcount(count + 1);
    }

    return(
        <>
            <p>Counter name: {name}</p>
            <h1>Counter: {count}</h1>
            <button onClick={handlechange}>
                Increment
            </button>
        </>
    );
}

export default Counting;
