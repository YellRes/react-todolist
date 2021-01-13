import React from 'react'
import AddTodo from './adddTodo.js'
import TodoList from './todoList.js' 

export default () => {
    return (
        <div className="todos">
            <AddTodo/>
            <TodoList/>
        </div>
    )
}