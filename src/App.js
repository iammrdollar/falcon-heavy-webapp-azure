import React, { Component } from 'react';
import falcon_heavy from './assets/falcon-heavy.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={falcon_heavy} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Falcon Heavy Lift Off</h1>
      </div>
    );
  }
}

export default App;
