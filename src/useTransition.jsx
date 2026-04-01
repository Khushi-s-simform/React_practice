import React, { useTransition, useState } from "react";

function Button({ name, callback }) {
    return (
      <button
        onClick={callback} >
        {name}
      </button>
    );
  }
   
   
function RenderLongList() {
  const [isPending, startTransition] = useTransition();
  const [list, setList] = useState([]);
  const sleep = (ms) =>
    new Promise((resolve) => {
      return setTimeout(resolve, ms);
    });
  const generateList = () => {
    //Long computational task
    startTransition(async () => {
      await sleep(1000);
      setList(Array.from({ length: 5000 }, (_, i) => i+1));
    });
  };
  return (
    <div>
      <h1>Long List loading</h1>
      <Button name={"Generate List"} callback={generateList} />
      {isPending ? (
        <div>...Loading</div>
      ) : (
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
 
function UseTransitionExample() {
  return (
    <div>
      <RenderLongList />
    </div>
  );
}
 
export default UseTransitionExample;
 
 