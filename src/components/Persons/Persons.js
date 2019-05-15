import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component{
  
static getDerivedStateFromProps(props, state){
  console.log('Persons getDerivedStateFromProps');
  return state;
}

shouldComponentUpdate(nextProps,nextState){
  console.log('Persons shouldComponentUpdate');

  //Must return a bool. Typically you would compare props first.
  return true;
}

getSnapshotBeforeUpdate(prevProps, prevState){
  console.log('Persons getSnapshotBeforeUpdate');
  return {message: 'snapshot'};
}

componentDidUpdate(prevProps, prevState, snapshot){
  console.log('Persons componentDidUpdate');
  console.log('snapshot', snapshot);
}

render(){
  console.log('Persons render');
  return this.props.persons.map((person, index) => 
  <Person 
    name={person.name}
    age={person.age}
    click={() => this.props.clicked(index)}
    key={person.id}
    changed={(event) => this.props.changed(event, person.id)}
  />
  )
}
}

export default Persons;