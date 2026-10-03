import React, { Component } from "react";

class CompteurClics extends Component {
  state = { clics: 0 };

  ajouterClic = () => {
    this.setState({ clics: this.state.clics + 1 });
  };

  reinitialiser = () => {
    this.setState({ clics: 0 });
  };

  render() {
    return (
      <div>
        <h3>Compteur de Clics</h3>

        <p>Nombre de clics : {this.state.clics}</p>

        <button onClick={this.ajouterClic}>
          Ajouter un clic
        </button>

        <button onClick={this.reinitialiser}>
          Réinitialiser
        </button>
      </div>
    );
  }
}

export default CompteurClics;