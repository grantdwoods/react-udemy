import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [ personsState, setPersonsState ] = useState({
      persons : [
        { name: 'Grant', age: 26 },
        { name: 'Jack', age: 30},
      ],
  });


  //Breaking up state management helps avoid manually merging old state.
  const [otherState, setOtherState] = useState ('Seprated state');

  console.log(personsState, otherState);

  const onCapitalizeClick = () => {
    console.log('Clicked!');

    //notice that with state management in functional components the updated state replaces the old state instead of merging.
    setPersonsState({
      persons : [
          { name: 'GRANT', age: 26 },
          { name: 'JACK', age: 30},
      ]
    });
  }

  return (
      <div className="App">
        <h1>Getting started with componenets</h1>
        <button onClick={onCapitalizeClick}>Capitalize Names</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      </div>
  );
}

export default App;
