import React from 'react';
import './App.css';

function App() {
 /*  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value); // update state
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    alert("Submitted: " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
      />
      <button type="submit">Submit</button>
    </form>
  ); */



/*   const [name,setName] = useState("");
  return (
    <>
      <h3>controlled input</h3>

      <input type='text' value={name} 
      onChange={(e) => setName(e.target.value.toUpperCase)}/>

      <p>Yoy typed = {name}</p>
    </>
  ) */

/* 
    const inputRef = useRef();

    const handleClick = () => {
      alert(inputRef.current.value);
    };
  
    return (
      <>
        <h3>Uncontrolled Input</h3>
  
        <input type="text" ref={inputRef} />
  
        <button onClick={handleClick}>Show Value</button>
      </>
    ); */
    const fruits = ["Apple", "Banana", "Mango"];

    return (
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    );
}

export default App;
