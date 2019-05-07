import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  //reserved word in react, only used in class based components
  state = {
    persons : [
      { name: 'Grant', age: 26 },
      { name: 'Jack', age: 30},
    ],
    otherState: 'stuff'
  }

  onCapitalizeClick = (newName) => {
    console.log('Clicked!');

    this.setState({
      persons : [
          { name: newName, age: 26 },
          { name: 'JACK', age: 30},
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Getting started with componenets</h1>
        <button onClick={() => this.onCapitalizeClick('GRANT')}>Capitalize Names</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.onCapitalizeClick.bind(this, 'Grant')}>
            <p>Child element!</p>
        </Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}>    
        </Person>
      </div>
    );
  }
}

export default App;
