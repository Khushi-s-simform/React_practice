import React, { useState, useEffect, useCallback } from "react";

/*  Custom Hook */
function useSearch(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const timer = setTimeout(() => {
      setLoading(true);

      fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`, { signal })
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            console.error(err);
            setLoading(false);
          }
        });
    }, 500); //  debounce

    // cleanup
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return { results, loading };
}

/*  Component */
export function CustomSearch() {
  const [query, setQuery] = useState("");

  const { results, loading } = useSearch(query);

  //  avoid re-render
  const handleChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🔍 Live Search App</h2>

      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search users..."
        style={{ padding: "8px", width: "250px" }}
      />

      {loading && <p>Loading...</p>}

      <ul>
        {results.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
