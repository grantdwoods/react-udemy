import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {

  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(()=>{
    console.log('Cockpit useEffect');

    //const timer = setTimeout(()=> { alert('Task done.')}, 1000);
   // toggleButtonRef.current.click();
    return () => { 
      console.log('Cockpit clean up function'); 
      //clearTimeout(timer);
    }
  },
    []
  );

  useEffect(()=>{
    console.log('Cockpit 2nd useEffect');
    return () => { console.log('Cockpit 2nd clean up funciton');}
  });

  const assignedClasses = [];
  let buttonClass = '';

  if(props.showPersons){
    buttonClass = classes.Red;
  }

  if(props.personsLength <=2 ){
    assignedClasses.push( classes.red );
  }
  if(props.personsLength <=1 ){
    assignedClasses.push( classes.bold );
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Udemy React</h1>
      <p className={assignedClasses.join(' ')}>Testing classes variable</p>
      <button
          ref={toggleButtonRef}
          className={buttonClass}
          onClick={props.clicked}>
          Show/Hide
      </button>
      <button onClick={authContext.login}>Log in</button>
      
  </div>
  );
}

export default React.memo(Cockpit);