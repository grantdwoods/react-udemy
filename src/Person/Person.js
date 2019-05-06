import React from 'react';

const person = (props) => {
    return(
        <p>My name is {props.name} and I am {props.age}</p>
    );
};

export default person;