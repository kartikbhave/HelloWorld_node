import appConstants from '../constants/app_constant';

export function addTodo(todo){
	return{
		type:appConstants.ADD_TODO,
		todoPayload:todo
	};
}