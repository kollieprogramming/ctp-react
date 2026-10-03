import React from "react";

function ListeTaches() {
  const taches = [
    { id: 1, texte: "Faire le ménage" },
    { id: 2, texte: "Acheter du lait" },
    { id: 3, texte: "Réviser React" },
    { id: 4, texte: "Apprendre JavaScript" }
  ];

  return (
    <ul>
      {taches.map(t => <li key={t.id}>{t.texte}</li>)}
    </ul>
  );
}

export default ListeTaches;