import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {

  render() {
    const {todos, checkBoxChangeHandler} = this.props;
    console.log(this.props);
    
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2> */}
        </div>
        <div className="container">
          <div className="App-intro">
            <TodoForm />
             <TodoList todos={todos} checkBoxChangeHandler={checkBoxChangeHandler}/> 
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
