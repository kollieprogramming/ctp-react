import React from "react";

function ListeTachesFiltrees() {
  const taches = [
    { id: 1, texte: "Faire le ménage", terminee: false },
    { id: 2, texte: "Acheter du lait", terminee: false },
    { id: 3, texte: "Réviser React", terminee: false }
  ];

  return (
    <ul>
      {taches.filter(t => !t.terminee).map(t => (
        <li key={t.id}>{t.texte}</li>
      ))}
    </ul>
  );
}

export default ListeTachesFiltrees;