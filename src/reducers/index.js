import {ADD_TODO, TOGGLE_TODO, UPDATE_CURRENT, LOAD_RECEIVED} from '../actions/index';

const initialState = {
  todos: [
    {id: 1, text: 'Learn React', isCompleted: true},
    {id: 2, text: 'Learn Redux', isCompleted: false},
    {id: 3, text: 'Learn React-Redux', isCompleted: false}
  ],
  currentTodo: ''
};

export default function todoApp(state=initialState, action){
    console.log(action.type);
    switch(action.type)
    {
        case ADD_TODO:
            return addTodo(state);
        case UPDATE_CURRENT:
            return updateCurrent(state, action.text);
        case TOGGLE_TODO:
            return toggleTodo(state, action.index);
        case LOAD_RECEIVED:
            return loadTodos(state, action.todos);
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
    var newTodos = state.todos.map((todo, i) => {
        if(index === i)
        {
            todo.isCompleted = !todo.isCompleted;
        }
        return todo;
    });

    return Object.assign({}, state, {todos: newTodos});
}

function loadTodos(state, todos)
{
    return Object.assign({}, state, {todos: todos});
}