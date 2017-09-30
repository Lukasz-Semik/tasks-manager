import React, { Component } from 'react';

class TaskCreator extends Component {
  constructor(props){
    super(props);

    this.state={
      msg: ''
    }
  }

  addTask(event){
    event.preventDefault();
    const taskTitle = event.target.taskTitle.value.trim();
    const msg = this.props.addTask(taskTitle);
    if(msg === 'empty'){
      this.setState(()=>({
        msg: 'Please, enter title for the task'
      }))
    }
    if(msg === 'exists'){
      this.setState(()=>({
        msg: 'This task alredy exists...'
      }))
    }
    if(msg === 'ok'){
      this.setState(()=>({
        msg: ''
      }));
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.addTask.bind(this)}>
          <input type="text" name="taskTitle" />
          <button>Add Task</button>
          {(this.state.msg && !this.props.didRemoveAll) && <p>{this.state.msg}</p>}
        </form>
      </div>
    );
  }
}

export default TaskCreator;
