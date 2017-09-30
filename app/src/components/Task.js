import React from 'react';

const Task = (props) => {
  console.log('Task Display props ', props);
  return(
    <div>
      <h2>{props.task.title}</h2>
      <p>{props.task.date}</p>
      <button onClick={props.removeTask.bind(this, props.task.title)}>Delete</button>
    </div>
  );
}

export default Task;
