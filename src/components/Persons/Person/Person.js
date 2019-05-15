import React, {Component} from 'react';
import classes from './Person.module.css';

class Person extends Component{

    static getDerivedStateFromProps(props, state){
        console.log('Person getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('Person shouldComponentUpdate');

        //Must return a bool. Typically you would compare props first.
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Person getSnapshotBeforeUpdate');
        return {message: 'snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Person componentDidUpdate');
        console.log('snapshot', snapshot);
    }

    render(){
        console.log('Person render');
    
        return(
            <div className={classes.Person}>
                <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
}

export default Person;