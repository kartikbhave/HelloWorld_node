import React, {Component} from 'react';
import {connect} from 'react-redux';
import  * as appAction from '../actions/todo_action';
import ToDo from '../component/alltodo'

class ToDoContainer extends Component{

	constructor(props, context){
        super(props, context);
        //alert(props)

		this.state={
			todo : {
				title : ''
			}
		};
		this.handleChange=this.handleChange.bind(this);
		this.onClickSave=this.onClickSave.bind(this);
	}

	handleChange(event){
		const todo=this.state.todo;
		todo.title=event.target.value;
		this.setState({
			todo : todo
		});
	}

	onClickSave(event) {
		this.props.dispatch(appAction.addTodo(this.state.todo));
	}
	todoRow(todo, index) {
		return <div key={index}>{todo.title}</div>;
	}

	render(){
		return(
			<div>
				<h2>All ToDo</h2>
                <ToDo todo={this.props.todos.map(this.todoRow)}/>
				 {/* {this.props.todos.map(this.todoRow)}  */}
				<h2>Add New ToDo</h2>
				<div className="form-group">
					<label className="control-label">ToDo :</label>
					<input type="text" className="form-control" value={this.state.todo.title} onChange={this.handleChange}/>
				</div>
				<div>
					<button type="submit" className="btn btn-primary" onClick={this.onClickSave}>Add</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		todos : state.todoR
	}
}

export default connect(mapStateToProps)(ToDoContainer);
//export default ToDoContainer;