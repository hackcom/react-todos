import React from 'react';

import store from '../store';
import {updateCurrent, addTodo} from '../actions/index';

export default () => {
    const state = store.getState();
    let input;
    return (
        <div>
            <input type="text" ref={node => input = node} value={state.currentTodo} onChange={() => store.dispatch(updateCurrent(input.value))} />&nbsp;<button onClick={() => store.dispatch(addTodo())}>Add</button>
        </div>
    );
};
    