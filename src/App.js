import React, { Component } from 'react';
import avengers from './AvengerInfo';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      avengers : avengers
    };
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">Avengers: By Megan</h1>
        </header>
        {this.state.avengers.map(avenger => {
          return (
            <div className = 'App-title'>
              Name: {avenger.name} - Age: {avenger.age}
            </div>
          );
        })}
    
      </div>
    );
  };
}

export default App;
