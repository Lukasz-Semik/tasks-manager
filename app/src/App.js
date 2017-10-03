import React, { Component } from 'react';
import moment from 'moment';

import Header from './components/Header';
import TaskCreator from './components/TaskCreator';
import TasksDisplay from './components/TasksDisplay';


class App extends Component {
  constructor(){
    super();

    this.state ={
      tasks: [],
      didRemoveAll: false,
      mountingDate: '',
      controlTasksStatus: true
    }
  }

  componentDidMount(){
    // const mountingDate = new Date().toDateString();
    const mountingDate = moment().format('MMM, Do-YYYY');
    try {
      const tasksData = localStorage.getItem('tasks');
      const tasks = JSON.parse(tasksData);
      if(tasks){
        this.setState(()=>({tasks, mountingDate}));
      }
    } catch (e){
      //do nothing
    }
  }

  componentDidUpdate(prevProps, prevState){
    if((prevState.tasks.length !== this.state.tasks.length) ||
      (prevState.controlTasksStatus !== this.state.controlTasksStatus)){
      const tasksData = JSON.stringify(this.state.tasks);
      localStorage.setItem('tasks', tasksData);
    }

  }

  addTask(title){
    const tasksCheckerArray=this.state.tasks.map((task)=>{
      return task.title;
    })
    const isDone = false;
    if(tasksCheckerArray.indexOf(title) === -1 && title !== ''){
      const date = moment().format('MMM, Do-YYYY');
      const newTask = [{
        title, date, isDone
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

  changeTaskStatus(taskTitle){
    const tasks = this.state.tasks.map((task)=>{
      if(task.title===taskTitle){
        task.isDone = !task.isDone;
      }
      return task;
    })
    const controlTasksStatus = !this.state.controlTasksStatus;
    this.setState(()=>({
      tasks, didRemoveAll: false, controlTasksStatus
    }))
  }

  removeAll(){
    this.setState(()=>({
      tasks: [], didRemoveAll: true
    }));
  }

  render(){

    return(
      <div className="wrapper">
        <div className="mounting-date">{this.state.mountingDate}</div>
        <Header />
        <TaskCreator addTask={this.addTask.bind(this)}
          tasks={this.state.tasks}
          didRemoveAll={this.state.didRemoveAll}
        />
        <TasksDisplay tasks={this.state.tasks}
          removeTask={this.removeTask.bind(this)}
          changeTaskStatus={this.changeTaskStatus.bind(this)}
          removeAll={this.removeAll.bind(this)}
        />
      </div>
    );
  }
}

export default App;
