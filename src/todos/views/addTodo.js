import React, {Component} from 'react'
import {add_Todo} from '../actions'
import {connect} from 'react-redux'

class addTodo extends Component {

    constructor() {
        super(...arguments)
    }

    inputRef = (node) => {
        this.input = node
    }

    onSubmit = () => {
        const input = this.input
        if (!input.value.trim()) return 

        this.props.onAdd(input.value)
        
        input.value = ''
    }

    render () {
        return (
            <>
                <input ref={this.inputRef}></input>
                
                <button onClick={this.onSubmit}>
                    添加
                </button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (value) => {
            
            dispatch(add_Todo(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addTodo)
