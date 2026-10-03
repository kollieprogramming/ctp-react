import React, { Component } from "react";

class Timer extends Component {
  state = { secondes: 0 };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ secondes: this.state.secondes + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("Timer arrêté !");
  }

  render() {
    return <p>Temps écoulé : {this.state.secondes} s</p>;
  }
}

function AppTimer() {
  const [afficher, setAfficher] = React.useState(true);

  return (
    <div>
      {afficher && <Timer />}

      <button onClick={() => setAfficher(!afficher)}>
        Supprimer / Afficher Timer
      </button>
    </div>
  );
}

export default AppTimer;