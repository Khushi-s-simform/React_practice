import { useState } from "react";

function State () {
    const [count , setCount ] =  useState(0);

    const handleClick = () => {
        console.log("before update : " ,count);
        setCount(count+1);
        console.log("after update : " , count);
    }

    console.log("Render: " , count);
    
    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment </button>
        </>
    )
    
}
export default State ;