import React, { Component } from "react";
import "./App.css";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  incrementValue = () => {
    this.setState((previousState) => ({
      counter: previousState.counter + 1,
    }));
  };

  decrementValue = () => {
    this.setState((previousState) => ({
      counter: previousState.counter - 1,
    }));
  };

  sayHello = () => {
    alert("Hello! Member!");
  };

  handleIncrement = () => {
    this.incrementValue();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleSyntheticEvent = (event) => {
    alert("I was clicked");
    console.log("Synthetic event:", event);
  };

  render() {
    return (
      <div className="app-container">
        <h2>{this.state.counter}</h2>

        <div className="button-container">
          <button onClick={this.handleIncrement}>Increment</button>

          <button onClick={this.decrementValue}>Decrement</button>

          <button onClick={() => this.sayWelcome("welcome")}>
            Say welcome
          </button>

          <button onClick={this.handleSyntheticEvent}>
            Click on me
          </button>
        </div>

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
