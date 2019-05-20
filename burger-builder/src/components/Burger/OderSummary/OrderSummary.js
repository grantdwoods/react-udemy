import React, {Fragment} from 'react';

const OrderSummary = props => {

    const ingeridentSummary = Object.keys(props.ingredients)
        .map((key)=>{
            return(
                <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>:{props.ingredients[key]}
                </li>
            )
        })

    return(
        <Fragment>
            <h3>Your Order</h3>
            <p>A burger with:</p>
            <ul>
                {ingeridentSummary}
            </ul>
            <p>Continue to checkout</p>
        </Fragment>
    );
};

export default OrderSummary;