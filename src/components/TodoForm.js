import React from 'react';

export default ({currentTodo, onClick, onChange, onClickLoad}) => {
    let input;
    return (
        <div>
            <input type="text" ref={node => input = node} value={currentTodo} onChange={() => onChange(input.value)} />&nbsp;<button onClick={onClick}>Add</button>&nbsp;<button onClick={onClickLoad}>Load</button>
        </div>
    );
};
    