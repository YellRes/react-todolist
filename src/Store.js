import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import Perf from 'react-addons-perf'

import {reducer as todoReducer} from './todos'
import {reducer as filterReducer} from './filter'

const win = window
win.Perf = Perf
const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
})

const middlewares = []
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(require('redux-immutable-state-invariant')())
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
)

export default createStore(reducer, {}, storeEnhancers)
