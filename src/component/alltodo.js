
import React, { Component } from "react";


class Todo extends Component {
constructor(props){
 super(props);
       

		// this.state={
		// 	todo : {
		// 		title : ''
		// 	}
		// };
		// this.handleChange=this.handleChange.bind(this);
		// this.onClickSave=this.onClickSave.bind(this);
	}

  render() {
    
    return (
      <div
      >
        <div>
        
         {this.props.todo}
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default Todo;
