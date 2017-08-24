export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const UPDATE_CURRENT = "UPDATE_CURRENT";
export const LOAD_REQUEST = "LOAD_REQUEST";
export const LOAD_RECEIVED = "LOAD_RECEIVED";

export function addTodo(){ return {type:ADD_TODO};}
export function toggleTodo(index){ return {type:TOGGLE_TODO, index: index};}
export function updateCurrent(text){ return {type:UPDATE_CURRENT, text: text};}

function loadRequest()  {return {type: LOAD_REQUEST}; }
function loadReceived(todos)  {return {type: LOAD_RECEIVED, todos: todos}; }
export function loadTodos(){
    return function(dispatch){
        dispatch(loadRequest());

        setTimeout(() => {
            var todos = [
                {id: 1, text: "Learn Redux", isCompleted: false},
                {id: 2, text: "Learn Redux-Thunk", isCompleted: false}
            ];

            dispatch(loadReceived(todos));
        }, 3000);
    };
}
