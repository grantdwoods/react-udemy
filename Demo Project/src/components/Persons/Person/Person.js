import React, {Component, Fragment} from 'react';
import classes from './Person.module.css';
import withClass from '../../HOC/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component{

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        console.log('Person render');
    
        return(
            <Fragment>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                    ref={this.inputElementRef}
                />
            </Fragment>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
};

export default withClass(Person, classes.Person);