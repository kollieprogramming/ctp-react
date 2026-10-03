import React, { useState, useEffect } from "react";

function ListePosts() {
  const [posts, setPosts] = useState([]);
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setChargement(false);
      });
  }, []);

  if (chargement) return <p>Chargement...</p>;

  return (
    <ul>
      {posts.map(p => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

export default ListePosts;