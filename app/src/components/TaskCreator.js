import React, { Component } from 'react';

class TaskCreator extends Component {
  constructor(props){
    super(props);
  }

  addTask(event){
    event.preventDefault();
    const taskTitle = event.target.taskTitle.value.trim();
    this.props.addTask(taskTitle);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.addTask.bind(this)}>
          <input type="text" name="taskTitle" />
          <button>Add Task</button>
        </form>
      </div>
    );
  }
}

export default TaskCreator;
