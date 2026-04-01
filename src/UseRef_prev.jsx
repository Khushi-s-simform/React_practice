import React, {useState , useEffect , useRef} from "react";

function PreviousValue() {
    const [count , setCount ] = useState(0);
    const prevCount = useRef(0);

    useEffect(() => {
        console.log("previous count stored",prevCount.current);
        prevCount.current = count;
    },[count]);

    return (
        <div>
            <h2>Current : {count}</h2>
            <h3>Previous : {prevCount.current}</h3>

            <button onClick={() => setCount(count+1)}>
                Increase
            </button>
        </div>
    )
}

export default PreviousValue;