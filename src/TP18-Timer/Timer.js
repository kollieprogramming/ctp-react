import React, { Component } from "react";

class Timer extends Component {
  state = {
    secondes: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        secondes: this.state.secondes + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("Timer arrêté !");
  }

  render() {
    return (
      <div>
        <h3>Timer</h3>

        <p>
          Temps écoulé : {this.state.secondes} s
        </p>
      </div>
    );
  }
}

export default Timer;