import React, { useState } from "react";

function AjouterTache() {
  const [taches, setTaches] = useState([]);
  const [texte, setTexte] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (texte.trim() === "") return;

    setTaches([...taches, { id: taches.length + 1, texte }]);
    setTexte("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={texte}
          onChange={e => setTexte(e.target.value)}
          placeholder="Nouvelle tâche"
        />

        <button>Ajouter</button>
      </form>

      <ul>
        {taches.map(t => (
          <li key={t.id}>{t.texte}</li>
        ))}
      </ul>
    </div>
  );
}

export default AjouterTache;