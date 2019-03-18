import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="quote-box">
          <div id="text">Text</div>
          <button id="new-quote">New Quote</button>
          <button id="tweet">Tweet</button>
          <button id="tweet-quote">Tweet Quote</button>
        </div>
      </div>
    );
  }
}

export default App;
