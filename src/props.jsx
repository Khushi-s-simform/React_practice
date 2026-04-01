import { useState } from "react";
function Child({ value }) {
    console.log("Child received prop:", value);
  
    return <p>Value: {value}</p>;
  }
  
  function Props() {
    const [count, setCount] = useState(0);
  
    console.log("Parent render:", count);
  
    return (
      <>
        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>
  
        <Child value={count} />
      </>
    );
  }
  
  export default Props;