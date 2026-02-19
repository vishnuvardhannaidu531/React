import { useState } from "react";
import Food from "./Food";
function List(){
    const[Fooditems,setFooditems]=useState(["Apple","Orange","Banana"])
    function handlechanges(){
        setFooditems(["Mangoes",...Fooditems])
    }
    return(
        <>
        <button onClick={handlechanges}>Increment</button>
        <Food food={Fooditems}></Food>
        </>
    );
}
export default List