import React, { Component } from 'react';
import './App.css';
import './ValidationComponent/Validation'
import Validation from './ValidationComponent/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    input:'',
    length: 0,
    chars:[]
  };

  onInputChanged = (event) =>{
    this.setState({
      input: event.target.value,
      length: event.target.value.length,
      chars: event.target.value.split('')
    });
  }

  onDeleteChar = (index) => {
    const charArray = [...this.state.chars];
    charArray.splice(index,1);

    this.setState({
      chars: charArray,
      input: charArray.join(''),
      length: charArray.length
    });
  }

  render() {

    let charArray = null;
    if(this.state.length){
      charArray = (
        <div>
          {
            this.state.chars.map( (char, index) => 
              <CharComponent 
                char={char}
                click={() => this.onDeleteChar(index)}
                key={index}
              />
            )
          }
        </div>
      );
    }

    return (
      <div className="App">
      <input 
        type='text' 
        onChange={this.onInputChanged} 
        value={this.state.input}
      />
      <p>{this.state.length}</p>
      <Validation length={this.state.length}/>
      {charArray}
      </div>
    );
  }
}

export default App;
