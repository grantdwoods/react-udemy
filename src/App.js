import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    users: [
      { name: 'Grant'},
      { name: 'Jack'},
      { name: 'Tom'}
    ]
  };

  onChangedState = (event) => {
    this.setState({
        users:[
          { name: event.target.value },
          { name: 'Jack'},
          { name: 'Tom'}
      ]
    });

  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.onChangedState}></UserInput>
        <UserOutput name={this.state.users[0].name}></UserOutput>
        <UserOutput name={this.state.users[1].name}></UserOutput>
        <UserOutput name={this.state.users[2].name}></UserOutput>
      </div>
    );
  }
}

export default App;