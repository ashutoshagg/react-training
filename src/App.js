import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to React Training</h1>
        <Person name="Person1" age="25"/>
        <Person name="Person2" age="26"/>
        <Person name="Person3" age="27"/>
      </div>
    );
  }
}

export default App;
