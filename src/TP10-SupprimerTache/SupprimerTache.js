import React, { useState } from "react";

function SupprimerTache() {
  const [taches, setTaches] = useState([
    { id: 1, texte: "Faire le ménage" },
    { id: 2, texte: "Acheter du lait" },
    { id: 3, texte: "Réviser React" }
  ]);

  const handleSupprimer = (id) => {
    setTaches(taches.filter(t => t.id !== id));
  };

  return (
    <ul>
      {taches.map(t => (
        <li key={t.id}>
          {t.texte}
          <button onClick={() => handleSupprimer(t.id)}>
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SupprimerTache;