import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <header className="test">
        <div className="row">
          <div className="col-sm 4">
            <p>Game Title</p>
          </div>
          <div className="col-sm-4 text-center">
            <p>Message</p>
          </div>
          <div className="col-sm-4 text-right">
            <p>Score: </p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
