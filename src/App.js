import React, { Component } from 'react';
import BaseSelection from './components/BaseSelection'
import SauceSelection from './components/SauceSelection'
import ToppingSelection from './components/ToppingSelection'
import Configuration from './containers/Configuration'
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
        </div>
      </div>
    );
  }
}

export default App;
