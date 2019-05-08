import React from 'react';

const Validation = props =>{

    const length = props.length;
    let message = null;
    if(length < 5){
        message = (<p>Text is too short!</p>)
    }else if (length > 10){
        message = (<p>Text is too long!</p>)
    }else{
        message = (<p>Text is valid!</p>)
    }

    return (message);
}

export default Validation