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
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {
            controls.map( control =>
                <BuildControl 
                    key={control.label} 
                    label={control.label} 
                    added={()=>props.ingredientAdded(control.type)}
                    removed={()=>props.ingredientRemoved(control.type)}
                    isDisabled={props.disabled[control.type]}
                />
            )
        }
        <button 
            className={classes.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.ordered}
        >ORDER NOW</button>
    </div>
);

export default BuildControls;