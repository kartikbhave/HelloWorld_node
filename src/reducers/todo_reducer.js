import appConstants from '../constants/app_constant';

export default function todoReducer(state = [], action) {
	
	switch(action.type){
		case appConstants.ADD_TODO :
			return [...state, Object.assign({}, action.todoPayload)];
		default:
			return state;	
	}
}