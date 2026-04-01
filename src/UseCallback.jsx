import React, { useState ,useCallback } from "react";

function UseCallBack() {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    const handleSearch = useCallback(() => {
      console.log("Searching for:", text);
    }, [text]); // important
  
    console.log("App rendered");
  
    return (
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={() => setCount(count + 1)}>
                Increase Count ({count})
            </button>
  
        <SearchButton onSearch={handleSearch} />
      </div>
    );
  }
  
  const SearchButton = React.memo(({ onSearch }) => {
    console.log("Button rendered");
  
    return <button onClick={onSearch}>Search</button>;
});

export default UseCallBack;