import React, { useState, useEffect } from "react";

function EveryRenderExample() {
  /* const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Runs on every render");
  });

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  ); */
 /*  useEffect(() => {
    console.log("Runs only once (component mounted)");

    return () => {
      console.log("Cleanup on unmount");
    };
  }, []);

  return <h2>Hello World</h2>;
  */


  /* const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
      console.log(data);
  });
  return <div>
    {data ? <pre>{JSON.stringify(data,null,2)} </pre> : <p>...loading</p>}
  </div>;
 */

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []); // run once

  return (
    <div>
      {data.slice(0, 5).map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );

}
 
export default EveryRenderExample;