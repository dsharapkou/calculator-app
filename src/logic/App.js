import React, { Component } from 'react';
import Buttons from './Buttons.js';
import Display from './Display.js';
import '../App.css';

class App extends Component {

    state = {
        a : [],
        b : [],
        bMemory : null,
        display : 0,
        operation : null,
        isSelected: false,
    };
    render() {
        const { a, b, display, operation, isSelected } = this.state;

    return (
      <div className="App">
          <h1>Welcome to study calculator!</h1>
          <p>Enter your calculations here</p>
          <form>
              <div className="calculator-body">
                  <Display display={display} />
                  <Buttons
                    a={a}
                    b={b}
                    display={display}
                    operation={operation}
                    goState={this.setState.bind(this)}
                    isSelected={isSelected}
                  />
              </div>
          </form>
      </div>
    );
  }
}

export default App;
