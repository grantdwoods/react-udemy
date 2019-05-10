import React from 'react';
import style from './Person.module.css';

const person = (props) => {
    console.log('Returning Person element');

    return(
        <div className={style.Person}>
            <p onClick={props.click}>My name is {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;