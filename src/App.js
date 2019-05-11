import React, { Component } from 'react';
import classes from './App.module.css';
import './App.module.css';
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

    let persons = null;
    let buttonClass = '';

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

      //classes.Red gets returned as a string representation of the css selector.
      //Also note that the Red class was a special sub selector and was still avalible on the classes object.
      buttonClass = classes.Red;
    }

    const assignedClasses = [];

    if(this.state.persons.length <=2 ){
      assignedClasses.push( classes.red );
    }
    if(this.state.persons.length <=1 ){
      assignedClasses.push( classes.bold );
    }

    return (
      <div className={classes.App}>
        <h1>Getting started with componenets</h1>
        <p className={assignedClasses.join(' ')}>Testing classes variable</p>
        <button
          className= {buttonClass}
          onClick={this.togglePersonHandler}>
          Show/Hide
        </button>
        {persons}
      </div>
    );
  }
}

export default App;