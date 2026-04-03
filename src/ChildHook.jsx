import {useState} from 'react'
// The Custom Hook
function useLogger(name) {
  console.log(`Hook running in: ${name}`);
}
 
// The Child Component
function Child({ id }) {
  useLogger(`Child ${id}`); // Called here
  return <div>I am Child {id}</div>;
}
 
// The Parent Component
export default function ChildHook() {
  useLogger("Parent"); // Called here
 
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Rerender Parent (Count: {count})
 
      </button>
      <Child id="A" />
      <Child id="B" />
    </div>
  );
}