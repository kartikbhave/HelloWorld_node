import {combineReducers} from 'redux';
import todoReducer from './todo_reducer';

const rootReducer = combineReducers({
	todoR : todoReducer
});

export default rootReducer;