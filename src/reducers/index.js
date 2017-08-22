import {ADD_TODO, TOGGLE_TODO, UPDATE_CURRENT} from '../actions/index';

const initialState = {
  todos: [
    {id: 1, text: 'Learn React', isCompleted: true},
    {id: 2, text: 'Learn Redux', isCompleted: false},
    {id: 3, text: 'Learn React-Redux', isCompleted: false}
  ],
  currentTodo: ''
};

export default function todoApp(state=initialState, action){
    switch(action.type)
    {
        case ADD_TODO:
            return addTodo(state);
        case UPDATE_CURRENT:
            return updateCurrent(state, action.text);
        case TOGGLE_TODO:
            return toggleTodo(state, action.index);
        default:
            return state;
    }
};

function addTodo(state)
{
    var nextId = state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 1;
    return Object.assign({}, state, {todos: state.todos.concat({id: nextId, text: state.currentTodo, isCompleted: false}), currentTodo: ''});
}

function updateCurrent(state, text)
{
    return Object.assign({}, state, {currentTodo: text});
}

function toggleTodo(state, index) {
    var newState = Object.assign({}, state);
    newState.todos[index].isCompleted = !newState.todos[index].isCompleted;
    return newState;
}