import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from './containers/TodoForm';
import TodoList from './containers/TodoList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2> */}
        </div>
        <div className="container">
          <div className="App-intro">
            <TodoForm />
            <TodoList /> 
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
