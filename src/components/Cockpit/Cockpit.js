import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = props => {

    const assignedClasses = [];
    let buttonClass = '';

    if(props.showPersons){
        buttonClass = classes.Red;
    }

    if(props.persons.length <=2 ){
      assignedClasses.push( classes.red );
    }
    if(props.persons.length <=1 ){
      assignedClasses.push( classes.bold );
    }

    return (
    <div className={classes.Cockpit}>
        <h1>Getting started with componenets</h1>
        <p className={assignedClasses.join(' ')}>Testing classes variable</p>
        <button
            className={buttonClass}
            onClick={props.clicked}>
            Show/Hide
        </button>
    </div>
    );
}

export default cockpit;