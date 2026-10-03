import React from "react";

function MessageRole({ role }) {
  return (
    <div>
      {role === "admin" ? (
        <p>Bienvenue Admin !</p>
      ) : role === "user" ? (
        <p>Bienvenue Utilisateur !</p>
      ) : (
        <p>Bienvenue Invité !</p>
      )}
    </div>
  );
}

export default MessageRole;