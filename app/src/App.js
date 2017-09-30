import React, { Component } from 'react';

import Header from './components/Header';
import TaskCreator from './components/TaskCreator';
import TasksDisplay from './components/TasksDisplay';


class App extends Component {
  constructor(){
    super();

    this.state ={
      tasks: []
    }
  }

  addTask(title){
    const date = new Date().toDateString();
    const newTask = [{
      title, date
    }]

    this.setState((prevState)=>({
      tasks: [...prevState.tasks, ...newTask]
    }));
  }

  removeTask(taskTitle){
    const tasks = this.state.tasks.filter((task)=>{
      return task.title !== taskTitle;
    })
    this.setState(()=>({
      tasks
    }));
  }

  removeAll(){
    this.setState(()=>({
      tasks: []
    }));
  }

  render(){
    console.log('App state: ', this.state);
    return(
      <div>
        <Header />
        <TaskCreator addTask={this.addTask.bind(this)}/>
        <TasksDisplay tasks={this.state.tasks} removeTask={this.removeTask.bind(this)} removeAll={this.removeAll.bind(this)}/>
      </div>
    );
  }
}

export default App;
