import React from 'react'

const TodoItem = ({onToggle, onRemove, complete, text}) => (
    <li
        className="todo-item"
        style={{
            textDecoration: complete ? 'line-through' : 'none'
        }}
    >

        <input className="toggle" type="checkbox" 
        checked={completed ? 'checked' : ''} readOnly onClick={onToggle}/>

        <label className="text">{text}</label>
        <button className="remove" onClick={onRemove}>
            x
        </button>

    </li>
)

export default TodoItem