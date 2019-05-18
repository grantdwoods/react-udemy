import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    // Recall alt syntax for property initilization
    // constructor(props){
    //     super(props);
    //     this.state = {...};
    // }
    state = {
        ingredients:{
            lettuce:1,
            bacon:1,
            cheese:2,
            meat:2
        },
    };

    render(){
        return(
            <Fragment>
                <Burger ingredients={this.state.ingredients}></Burger>
                <div>Controls</div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;