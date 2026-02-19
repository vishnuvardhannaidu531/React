import { useState } from "react";
import Counting from "./Counting";

function Clock(){
    const [clock, setclock] = useState(["A","B","C"]);

    function handlechange(){
        setclock(prev => ["D", ...prev]);
    }

    return (
        <>
            <button onClick={handlechange}>
                Increment Clock
            </button>

            {clock.map((c) => (
                <Counting name={c} />
            ))}
        </>
    );
}

export default Clock;
