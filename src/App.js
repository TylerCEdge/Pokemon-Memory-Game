import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import FriendCard from "./components/FriendCard"
import Game from "./components/Game"
import Jumbotron from "./components/Jumbotron"
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends,
    clickedimg: [],
    score: 0
  };

  removeFriend = id => {
    // Filter this.state.img for img with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.img equal to the new img array
    this.setState({ friends });
  };

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Jumbotron />
        <Game>
          {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
          ))}
        </Game>
        <Footer />
      </div>
    );
  }
}
export default App;
