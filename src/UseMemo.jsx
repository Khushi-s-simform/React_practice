import React , {useState , useMemo} from "react";

function ExpensiveComponent() {
    const [count , setCount] = useState(0);
    const [num , setNum] = useState(2);

    const square = useMemo(() => {
        console.log("calculating....");
        return num * num;
    },[num])

    return (
        <div>
            <h2>Square: {square}</h2>

            <button onClick={() => setCount(count+1)}>
                Re-render ({count})
            </button>

            <button onClick={() => setNum(num+1)}>
                change Number
            </button>
        </div>
    )
}
export default ExpensiveComponent;