import { combineReducers } from 'redux';
import todoReducer from './todo/todoReducers';

const rootReducer = combineReducers({
    todos: todoReducer
})

export default rootReducer