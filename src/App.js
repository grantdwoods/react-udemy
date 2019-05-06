import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  //reserved word in react, only used in class based components
  state = {
    persons : [
      { name: 'Grant', age: 26 },
      { name: 'Jack', age: 30},
    ]
  }

  onSwitchClick = () => {
    console.log('Clicked!');
    
  }

  render() {
    return (
      <div className="App">
        <h1>Getting started with componenets</h1>
        <button onClick={this.onSwitchClick}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      </div>
    );
  }
}

export default App;
