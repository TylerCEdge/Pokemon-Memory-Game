import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Jumbotron from "./components/Jumbotron"
import Game from "./components/Game"
import img from "./img.json";
import "./App.css";

class App extends Component {
  state = {
    img,
    clickedimg: [],
    score: 0
  };

  render() {
    return (
      <div className="flex-container">
        <Header score={this.state.score} />
        <Jumbotron />
        <Game />
        <Footer />
      </div>
    );
  }
}
export default App;
