import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import UserPollComponent from "elements-app/elements/user-poll";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <h1>Test</h1>
          <app-user-poll />
          <script src="user-poll.js" />
        </div>
      </div>
    );
  }
}

export default App;
