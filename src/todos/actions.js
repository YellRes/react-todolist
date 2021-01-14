import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes'

let nextTodoId = 0

export const add_Todo = (text) => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId++,
    text
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id
})