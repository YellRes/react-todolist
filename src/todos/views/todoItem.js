import React from 'react'

const todoItem = ({completed, text, onToggle, onRemove, id}) => {
    const checkedProp = completed ? {check: true} : {}
    return (
        <li
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}>
            <input
                type="checkbox"
                {...checkedProp}
                readOnly
                onClick={onToggle}
            />

            <label>
                    {text}
            </label>
            <button onClick={onRemove}>x</button>
        </li>
    )
}


export default todoItem