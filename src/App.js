import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      { name: 'Grant', age: 26, id: 10},
      { name: 'Jack', age: 30, id: 40},
      { name: 'Tom', age: 50, id: 78}
    ],
    otherState: 'stuff',
    showPersons: false,
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons:persons});
  }

  nameChangeHandler = (event, id) =>{

    const personIndex = this.state.persons.findIndex( per => per.id === id );
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const shown = this.state.showPersons;
    this.setState({showPersons: !shown});
  }

  render() {

    console.log('Render called in App');

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
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
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              />
          )
        }
      </div> 
      );

      style.backgroundColor = 'red';
    }

    const classes = [];

    if(this.state.persons.length <=2 ){
      classes.push('red');
    }
    if(this.state.persons.length <=1 ){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Getting started with componenets</h1>
        <p className={classes.join(' ')}>Testing classes variable</p>
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