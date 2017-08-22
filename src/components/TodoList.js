import React from 'react';

import {toggleTodo} from '../actions/index';
import store from '../store';

const TodoItem = ({todo, checkBoxChangeHandler}) => 
    <li className={todo.isCompleted ? "completed" : ""}>
        <input type="checkbox" checked={todo.isCompleted} onChange={() => store.dispatch(checkBoxChangeHandler())} /> {todo.text}
    </li>

export default () => {
    const {todos} = store.getState();
    return (
        <ul>
            {todos.map((todo, index) => <TodoItem key={todo.id} todo={todo} checkBoxChangeHandler={toggleTodo.bind(null, index)} />)}
        </ul>
    );
};
    