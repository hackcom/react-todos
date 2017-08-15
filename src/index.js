import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
  todos: [
    {id: 1, text: 'Learn React', isCompleted: true},
    {id: 2, text: 'Learn Redux', isCompleted: false},
    {id: 3, text: 'Learn React-Redux', isCompleted: false}
  ]
};

function checkBoxChangeHandler(evt) {
    const todo = Object.assign({}, this, {isCompleted: evt.target.checked});
    console.log(todo, evt.target);
    const index = state.todos.findIndex(t => t.id === todo.id);
    if(index < 0 )
    {
      return;  
    }
    const newState = Object.assign({}, state);  
    newState.todos[index] = todo;
    render(newState);
  }

function render(state)
{
    ReactDOM.render(<App todos={state.todos} checkBoxChangeHandler={checkBoxChangeHandler} />, document.getElementById('root'));
}

render(state);
registerServiceWorker();
