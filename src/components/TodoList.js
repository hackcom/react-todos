import React from 'react';

const TodoItem = ({todo, onClick}) => 
    <li className={todo.isCompleted ? "completed" : ""}>
        <input type="checkbox" checked={todo.isCompleted} onChange={onClick} /> {todo.text}
    </li>

export default ({todos, onClick}) => {
    return (
        <ul>
            {todos.map((todo, index) => <TodoItem key={todo.id} todo={todo} onClick={onClick.bind(null, index)} />)}
        </ul>
    );
};
    