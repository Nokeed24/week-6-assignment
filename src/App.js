import React, { Component } from 'react';
import Configuration from './containers/Configuration'
import Sum from './containers/Sum'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to New Age Pizza!</h1>
        </header>
        <div className="mainbody">
          <Configuration />
          <Sum />
        </div>
      </div>
    );
  }
}

export default App;
