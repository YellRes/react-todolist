import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addTodo} from '../actions'

class addTodo extends Component {
    constructor() {

    }

    refInput = (node) => {
        this.input = node
    }

    onSubmit = (ev) => {
        ev.preventDefault()    

        const input = this.input
        if (!input.value.trim()) {
            return
        }

        this.props.onAdd(input.value)
        input.value = ''
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput}/>
                    <button className="add-btn" type="submit">
                        添加
                    </button>
                </form>    
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(addTodo)