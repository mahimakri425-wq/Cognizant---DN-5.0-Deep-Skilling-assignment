import React, { Component } from "react";
import "./App.css";

import GuestPage from "./GuestPage";
import UserPage from "./UserPage";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let page;
    let button;

    if (isLoggedIn) {
      page = <UserPage />;

      button = (
        <LogoutButton onClick={this.handleLogoutClick} />
      );
    } else {
      page = <GuestPage />;

      button = (
        <LoginButton onClick={this.handleLoginClick} />
      );
    }

    return (
      <div className="app-container">
        {page}

        <div className="login-button">
          {button}
        </div>
      </div>
    );
  }
}

export default App;