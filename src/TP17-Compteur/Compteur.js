import React, { Component } from "react";

class Compteur extends Component {
  state = { compteur: 0 };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.compteur !== this.state.compteur) {
      console.log("Compteur a changé :", this.state.compteur);
    }
  }

  incrementer = () => {
    this.setState({ compteur: this.state.compteur + 1 });
  };

  render() {
    return (
      <div>
        <p>Compteur : {this.state.compteur}</p>
        <button onClick={this.incrementer}>+1</button>
      </div>
    );
  }
}

export default Compteur;