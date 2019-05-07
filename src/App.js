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
    otherState: 'stuff',
    showPersons: false,
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

  onNameChange = (event) =>{
    this.setState({
      persons : [
          { name: 'Grant', age: 26 },
          { name: event.target.value, age: 30},
      ]
    });
  }

  togglePersonHandler = () => {
    const shown = this.state.showPersons;
    this.setState({showPersons: !shown});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Getting started with componenets</h1>

        <button 
          style={style}
          onClick={this.togglePersonHandler}>
          Show/Hide
        </button>

        { 
          this.state.showPersons ? 
            <div>
              <Person 
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.onCapitalizeClick.bind(this, 'Grant')}>
                <p>Child element!</p>
              </Person>

              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                changed={this.onNameChange}>
              </Person>
              </div> 
          :null
        }
      </div>
    );
  }
}

export default App;
