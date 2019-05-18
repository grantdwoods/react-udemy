import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{
    // Recall alt syntax for property initilization
    // constructor(props){
    //     super(props);
    //     this.state = {...};
    // }
    state = {
        ingredients:{
            lettuce:0,
            bacon:0,
            cheese:0,
            meat:0
        },
    };

    render(){
        return(
            <Fragment>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls></BuildControls>
            </Fragment>
        );
    }
}

export default BurgerBuilder;