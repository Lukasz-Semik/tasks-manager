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
      }));
    }
    if(msg === 'exists'){
      this.setState(()=>({
        msg: 'This task alredy exists...'
      }));
    }
    if(msg === 'ok'){
      this.setState(()=>({
        msg: ''
      }));
      event.target.taskTitle.value = '';
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.addTask.bind(this)} className="form">
          <input type="text" name="taskTitle" className="form__input" />
          <button className="btn"><i className="fa fa-plus-square" aria-hidden="true"></i></button>
        </form>
        {(this.state.msg || !this.props.didRemoveAll) && <p className="form__error">{this.state.msg}</p>}
      </div>
    );
  }
}

export default TaskCreator;
