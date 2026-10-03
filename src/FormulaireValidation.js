import React, { useState } from "react";

function FormulaireValidation() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nom || !email) {
      setMessage("Nom et email obligatoires !");
    } else {
      setMessage("Formulaire envoyé !");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nom}
        onChange={e => setNom(e.target.value)}
        placeholder="Nom"
      />
      <br />

      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br />

      <button type="submit">Envoyer</button>

      <p>{message}</p>
    </form>
  );
}

export default FormulaireValidation;