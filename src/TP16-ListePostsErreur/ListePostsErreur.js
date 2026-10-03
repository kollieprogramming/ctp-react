import React, { useState, useEffect } from "react";

function ListePostsErreur() {
  const [posts, setPosts] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts123")
      .then(res => {
        if (!res.ok) throw new Error("Erreur réseau !");
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setChargement(false);
      })
      .catch(err => {
        setErreur(err.message);
        setChargement(false);
      });
  }, []);

  if (chargement) return <p>Chargement...</p>;
  if (erreur) return <p>{erreur}</p>;

  return (
    <ul>
      {posts.map(p => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

export default ListePostsErreur;