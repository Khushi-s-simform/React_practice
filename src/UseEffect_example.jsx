import { useState, useEffect } from "react";

function Example(){
    const [count , setCount] = useState(0);

    useEffect(() => {
        console.log("effect runs");
        
        const id = setInterval(() => {
            console.log("Running Interval");
        },1000)

        return () => {
            console.log("Cleanup Runs");
            clearInterval(id);
        };
    },[count])

    return (
        <button onClick={() => setCount(count+1)}>
            {count}
        </button>
    )
}

export default Example;