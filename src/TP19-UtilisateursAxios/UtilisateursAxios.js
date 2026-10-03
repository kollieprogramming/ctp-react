import React, { Component } from "react";


import axios from "axios";

class UtilisateursAxios extends Component {
    
  state = {
    utilisateurs: [],
    chargement: true,
    erreur: null
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res =>
        this.setState({
          utilisateurs: res.data,
          chargement: false
        })
      )
      .catch(err =>
        this.setState({
          erreur: err.message,
          chargement: false
        })
      );
  }

  ajouterUtilisateur = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: "Nouveau",
        email: "nouveau@example.com"
      })
      .then(res =>
        this.setState({
          utilisateurs: [...this.state.utilisateurs, res.data]
        })
      );
  };

  render() {
    if (this.state.chargement) return <p>Chargement...</p>;

    if (this.state.erreur) {
      return <p>Erreur : {this.state.erreur}</p>;
    }

    return (
      <div>
        <button onClick={this.ajouterUtilisateur}>
          Ajouter Utilisateur
        </button>

        <ul>
          {this.state.utilisateurs.map(u => (
            <li key={u.id}>
              {u.name} — {u.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UtilisateursAxios;