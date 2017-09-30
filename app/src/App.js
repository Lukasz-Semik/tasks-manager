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
    const tasksCheckerArray=this.state.tasks.map((task)=>{
      return task.title;
    })
    if(tasksCheckerArray.indexOf(title) === -1 && title !== ''){
      const date = new Date().toDateString();
      const newTask = [{
        title, date
      }]

      this.setState((prevState)=>({
        tasks: [...prevState.tasks, ...newTask], didRemoveAll: false
      }));

      return 'ok';
    }else if(title === ''){
      return 'empty';
    }else if(tasksCheckerArray.indexOf(title) > -1){
      return 'exists';
    }
  }

  removeTask(taskTitle){
    const tasks = this.state.tasks.filter((task)=>{
      return task.title !== taskTitle;
    })
    this.setState(()=>({
      tasks, didRemoveAll: false
    }));
  }

  removeAll(){
    this.setState(()=>({
      tasks: [], didRemoveAll: true
    }));
  }

  render(){
    console.log('App state: ', this.state);
    return(
      <div>
        <Header />
        <TaskCreator addTask={this.addTask.bind(this)} tasks={this.state.tasks} didRemoveAll={this.state.didRemoveAll}/>
        <TasksDisplay tasks={this.state.tasks} removeTask={this.removeTask.bind(this)} removeAll={this.removeAll.bind(this)}/>
      </div>
    );
  }
}

export default App;
