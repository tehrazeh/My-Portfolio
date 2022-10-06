import { combineReducers, createStore } from 'redux'
import headerReducer from './header-reducer'

const reducers = combineReducers({
    header: headerReducer
})

let store = createStore(reducers)

export default store;