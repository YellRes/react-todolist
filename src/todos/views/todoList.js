import React from 'react'
import {connect} from 'react-redux'
import {toggleTodo, removeTodo} from '../actions'
import TodoItem from './todoItem'
 
const todoList = ({todoArr, onToggle, onRemove}) => {
    return (
        todoArr.map(item => (
            <TodoItem
                key={item.id}
                text={item.text}
                completed={item.completed}
                onToggle={() => onToggle(item.id)}
                onRemove={() => onRemove(item.id)}
            />
        ))
    )
}

const getState = (state, filter) => {
    switch(filter) {
        case 'ALL':
            return state
        case 'COMPLETED':
            return state.filter(item => item.completed)
        case 'UNCOMPLETED':
            return state.filter(item => !item.completed)
        default: 
            throw new Error('unsupport filter')
    }
}

const mapStateToProps = (state) => {
    return {
        todoArr: getState(state.todos, state.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggle: (id) => {
            dispatch(toggleTodo(id))
        },
        onRemove: (id) => {
            dispatch(removeTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoList)