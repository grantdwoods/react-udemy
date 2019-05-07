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

  deletePersonHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({persons:persons});
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

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
        {
          this.state.persons.map((person, index) => 
            <Person 
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}/>
          )
        }
      </div> 
      );
    }

    return (
      <div className="App">
        <h1>Getting started with componenets</h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>
          Show/Hide
        </button>
        {persons}
      </div>
    );
  }
}

export default App;