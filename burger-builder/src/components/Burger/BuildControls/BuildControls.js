import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Lettuce', type: 'lettuce'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'}
];

const BuildControls = props => (
    <div className={classes.BuildControls}>
        {
            controls.map( control => (
                <BuildControl key={control.label} label={control.label}></BuildControl>)
            )
        }
    </div>
);

export default BuildControls;