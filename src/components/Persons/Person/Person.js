import React, {Component, Fragment} from 'react';
import classes from './Person.module.css';
import withClass from '../../HOC/withClass';

class Person extends Component{

    render(){
        console.log('Person render');
    
        return(
            <Fragment>
                <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Fragment>
        );
    }
}

export default withClass(Person, classes.Person);