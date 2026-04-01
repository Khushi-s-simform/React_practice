// import React, { useEffect, useRef } from "react";

// function Change() {
//   const newRef = useRef(0);

//   const handleChange = () => {
//     newRef.current = 1
//     console.log("Ref value:", newRef.current);
//   };

//   useEffect(() => {
//     console.log("I have changed");
//   }, [newRef.current]);

//   return (
//     <div>
//       <h1>useRef Example</h1>
//       <button onClick={handleChange}>Change Ref</button>
//     </div>
//   );
// }

// export default Change;