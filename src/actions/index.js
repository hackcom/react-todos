export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const UPDATE_CURRENT = "UPDATE_CURRENT";

export function addTodo(){ return {type:ADD_TODO};}
export function toggleTodo(index){ return {type:TOGGLE_TODO, index: index};}
export function updateCurrent(text){ return {type:UPDATE_CURRENT, text: text};}