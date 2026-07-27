import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      currency: "",
    };
  }

  handleAmountChange = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  handleCurrencyChange = (event) => {
    this.setState({
      currency: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.amount === "") {
      alert("Please enter the amount");
      return;
    }

    const convertedAmount = Number(this.state.amount) * 80;

    alert(`Converting to Euro Amount is ${convertedAmount}`);
  };

  render() {
    return (
      <div className="converter">
        <h1>Currency Convertor!!!</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label htmlFor="amount">Amount:</label>

            <input
              id="amount"
              type="number"
              value={this.state.amount}
              onChange={this.handleAmountChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="currency">Currency:</label>

            <input
              id="currency"
              type="text"
              value={this.state.currency}
              onChange={this.handleCurrencyChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;