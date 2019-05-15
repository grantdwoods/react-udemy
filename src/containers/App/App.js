import React, { Component } from 'react';
import classes from './App.module.css';
import './App.module.css';
import Persons from '../../components/Persons/Persons';
import Cockpit from '../../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('App constructor');
  }

  state = {
    persons : [
      { name: 'Grant', age: 26, id: 10},
      { name: 'Jack', age: 30, id: 40},
      { name: 'Tom', age: 50, id: 78}
    ],
    otherState: 'stuff',
    showPersons: false,
    showCockPit: true,
  }

  static getDerivedStateFromProps(props,state){
    console.log('App getDerivedStateFromProps');
    console.log('props',props);
    return state;
  }

  componentDidMount(){
    console.log('App componentDidMount');
  }

  shouldComponentUpdate(){
    console.log('App shouldComponentUpdate');
    return true;
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
    console.log('App render');

    let persons = null;

    if(this.state.showPersons){
      persons = (
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>
      );
    }

    return (
      <div className={classes.App}>
      <button onClick={()=>{this.setState({showCockPit:false})}}>remove cockpit</button>
        {this.state.showCockPit ?<Cockpit 
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}
        />: null}
        {persons}
      </div>
    );
  }
}

export default App;