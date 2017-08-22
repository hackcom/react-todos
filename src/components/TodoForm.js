import React from 'react';

export default ({currentTodo, onClick, onChange}) => {
    let input;
    return (
        <div>
            <input type="text" ref={node => input = node} value={currentTodo} onChange={() => onChange(input.value)} />&nbsp;<button onClick={onClick}>Add</button>
        </div>
    );
};
    