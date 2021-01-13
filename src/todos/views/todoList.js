import React from 'react'
import TodoItem from './todoItem'
import {toggleTodo, removeTodo} from '../actions'
import {FilterTypes} from '../../constants'
import { connect } from 'react-redux'

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul className="todo-list">
            {
                todos.map(item => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={() => onToggleTodo(item.id)}
                        onRemve={() => onRemoveTodo(item.id)}
                    ></TodoItem>
                ))
            }
        </ul>
    )
}

const selectVisibleTodos = (todos, filter) => {
    switch (filter) {
        case FilterTypes.ALL:
            return todos
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed)
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed)
        default: 
            throw new Error('unsupport filter')
    }
}

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: id => {
            dispatch(toggleTodo(id))
        },
        onRemoveTodo: id => {
            dispatch(removeTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)