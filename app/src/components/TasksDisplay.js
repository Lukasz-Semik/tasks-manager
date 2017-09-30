import React from 'react';
import Task from './Task';

const TaskDisplay = (props) => {
  console.log('Task props ', props);
  return(
    <div>
      Task Display
      <button onClick={props.removeAll}>Remove All</button>
      {props.tasks.length < 1 && <p>Add to start</p>}
      {props.tasks.map((task, i)=>{
        return (<Task key={i} task={task} removeTask={props.removeTask}/>);
      })}
    </div>
  );
}

export default TaskDisplay;
