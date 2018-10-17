import React, { Component } from 'react';
import Buttons from './Buttons.js';
import Display from './Display.js';
import '../App.css';

class App extends Component {

    state = {
        a : 0,
        b : 0,
        result : 0,
        operation : null,
    };
    render() {
        const { a, b, result, operation } = this.state;

    return (
      <div className="App">
          <h1>Welcome to study calculator!</h1>
          <p>Enter your calculations here</p>
          <form>
              <div className="calculator-body">
                  <Display result={result} />
                  <Buttons
                    a={a}
                    b={b}
                    result={result}
                    operation={operation}
                    goState={this.setState.bind(this)}
                  />
              </div>
          </form>
      </div>
    );
  }
}

export default App;
