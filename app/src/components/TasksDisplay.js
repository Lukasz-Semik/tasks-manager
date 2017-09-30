import React from 'react';
import Task from './Task';

const TaskDisplay = (props) => {
  console.log('Task props ', props);
  return(
    <div className="task-display">
      {props.tasks.length < 1 && <p>List is empty</p>}
      {props.tasks.map((task, i)=>{
        return (<Task key={i} task={task} removeTask={props.removeTask}/>);
      })}
      {props.tasks.length > 0 &&
        <button onClick={props.removeAll}
          className="btn btn--remove-all">Remove All
        </button>
      }
    </div>
  );
}

export default TaskDisplay;
