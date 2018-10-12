import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <form>
              <h1>Welcome to study calculator!</h1>
              <p>Enter your calculations here</p>
              <input type="text" size="30"></input>
              <div className="buttons-numbers">
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4</button>
                  <button>5</button>
                  <button>6</button>
                  <button>7</button>
                  <button>8</button>
                  <button>9</button>
              </div>
              <div className="buttons-operators">
                  <button>+</button>
                  <button>-</button>
                  <button>*</button>
                  <button>/</button>
              </div>
          </form>
      </div>
    );
  }
}

export default App;
