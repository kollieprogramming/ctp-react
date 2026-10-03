import React, { useState } from "react";

function FormulaireMulti() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    role: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form>
        <input
          name="nom"
          value={form.nom}
          onChange={handleChange}
          placeholder="Nom"
        />
        <br />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <br />

        <input
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="Rôle"
        />
        <br />
      </form>

      <p>Nom: {form.nom}</p>
      <p>Email: {form.email}</p>
      <p>Rôle: {form.role}</p>
    </div>
  );
}

export default FormulaireMulti;