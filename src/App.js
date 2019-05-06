import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Getting started with componenets</h1>
        <Person name='Grant' age='26'> My Hobbies: being sad.</Person>
        <Person name='Jack' age='35'/>
      </div>
    );
  }
}

export default App;
