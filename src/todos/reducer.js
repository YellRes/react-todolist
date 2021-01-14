import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes'

export default (state = [], action) => {
   
    switch(action.type) {
        case ADD_TODO: {
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ]
        }

        case TOGGLE_TODO: {
            return state.map(item => {
                if (item.id === action.id) {
                    return {...item, completed: !item.completed}
                } else {
                    return item
                }
            })
        }

        case REMOVE_TODO: {
            return state.filter(item => {
                return item.id !== action.id
            })
        }

        default: {
            return state
        }
             
    }
} 