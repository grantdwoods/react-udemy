import React from 'react';

const UserOutput = props => {

    const style = {
        width: '30%',
        margin: '16px auto',
        border: '1px solid #eee',
        'box-shadow': '0 2px 3px #ccc',
        padding: '16px',
        'text-align': 'center',
    };


    return (
        <div className='UserOutput' style={style}>
            <h2>{props.name}</h2>
            <p>Para 1</p>
            <p>Para 2</p>
        </div>
    )
}

export default UserOutput;