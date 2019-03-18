import React, { Component } from "react";
import "./App.css";
import Quotes from "../Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      currentQuote: 0
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          quotes: data.quotes,
          currentQuote: 0
        })
      );
  }

  getNewQuote = () =>
    this.setState(state => ({ currentQuote: state.currentQuote + 1 }));

  render() {
    return (
      <div id="wrapper">
        <div id="quote-box">
          <div id="text">
            <Quotes data={this.state.quotes[this.state.currentQuote]} />
          </div>
          <button onClick={this.getNewQuote} id="new-quote">
            New Quote
          </button>
          <button id="tweet">Tweet</button>
          <button id="tweet-quote">Tweet Quote</button>
        </div>
      </div>
    );
  }
}

export default App;
