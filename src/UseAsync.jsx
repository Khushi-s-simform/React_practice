import React, { useEffect, useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log("loading....");
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        console.log("data fetched successfully");
      } catch (err) {
        console.log("error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return users.map(user => <div key={user.id}>{user.name}</div>);
}

export default UsersList;