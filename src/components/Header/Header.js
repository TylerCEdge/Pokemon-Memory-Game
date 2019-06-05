import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <header className="test">
        <p className="brand">Game Title</p>
        <p className="message">Game Message</p>
        <p className="score">Score</p>
      </header>
    );
  }
}

export default Header;
