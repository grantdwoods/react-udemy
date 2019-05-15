import React, {useEffect} from 'react';
import classes from './Cockpit.module.css';

const Cockpit = props => {

  useEffect(()=>{
    console.log('Cockpit useEffect');
    //http requests... other work usually done in lifecycle hooks

    setTimeout(()=> { alert('Task done.')}, 1000);

    //returning a function will cause this function to be executed before main function runs
    //and after the first render cycle
    return () => { console.log('Cockpit clean up function');}

  },//second argument to useEffect.
  []);

  //no second argument, runs every update cycle
  useEffect(()=>{
    console.log('Cockpit 2nd useEffect');
    return () => { console.log('Cockpit 2nd clean up funciton');}
  });


  const assignedClasses = [];
  let buttonClass = '';

  if(props.showPersons){
    buttonClass = classes.Red;
  }

  if(props.persons.length <=2 ){
    assignedClasses.push( classes.red ); //classes=['red']
  }
  if(props.persons.length <=1 ){
    assignedClasses.push( classes.bold ); // classes=['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Udemy React</h1>
      <p className={assignedClasses.join(' ')}>Testing classes variable</p>
      <button
          className={buttonClass}
          onClick={props.clicked}>
          Show/Hide
      </button>
  </div>
  );
}

export default Cockpit;