import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        setData(result);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

export function Users() {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export function UserDetail() {
    const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/todos/1");
  
    if (loading) return <p>Loading...</p>;
  
    return (
      <div>
        <h3>{data.title}</h3>
        <p>Status: {data.completed ? "Done" : "Not Done"}</p>
      </div>
    );
  }