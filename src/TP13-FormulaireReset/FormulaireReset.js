import React, { useState } from "react";

function FormulaireReset() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");

  const handleReset = () => {
    setNom("");
    setEmail("");
  };

  return (
    <form>
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

      <button type="button" onClick={handleReset}>
        Réinitialiser
      </button>
    </form>
  );
}

export default FormulaireReset;