import React, { Component } from 'react';
import Buttons from './Buttons.js';
import Display from './Display.js';
import '../App.css';

class App extends Component {
    render() {
    return (
      <div className="App">
          <form>
              <Display />
              <div>
                <Buttons />
              </div>
          </form>
      </div>
    );
  }
}

export default App;
