import React from 'react';

const TodoItem = ({todo, checkBoxChangeHandler}) =>
    <li className={todo.isCompleted ? "completed" : ""}>
        <input type="checkbox" checked={todo.isCompleted} onChange={checkBoxChangeHandler.bind(todo)} /> {todo.text}
    </li>

export default ({todos, checkBoxChangeHandler}) => {
    return (
        <ul>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} checkBoxChangeHandler={checkBoxChangeHandler} />)}
        </ul>
    );
};
    