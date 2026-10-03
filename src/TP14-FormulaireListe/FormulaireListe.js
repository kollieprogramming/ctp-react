import React, { useState } from "react";

function FormulaireListe() {
  const [produit, setProduit] = useState("");
  const [liste, setListe] = useState([]);

  const handleAdd = () => {
    if (!produit) return;

    setListe([...liste, { id: liste.length + 1, nom: produit }]);
    setProduit("");
  };

  return (
    <div>
      <input
        value={produit}
        onChange={e => setProduit(e.target.value)}
        placeholder="Produit"
      />

      <button onClick={handleAdd}>Ajouter</button>

      <ul>
        {liste.map(p => (
          <li key={p.id}>{p.nom}</li>
        ))}
      </ul>
    </div>
  );
}

export default FormulaireListe;