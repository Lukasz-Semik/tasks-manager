import React from 'react';

const Task = (props) => {
  console.log('Task Display props ', props);
  return(
    <div className="task-display__item">
      <h2 className="task_display__item--title">{props.task.title}</h2>
      <div className="task-display__item--date">
        <p>{props.task.date}</p>
        <button onClick={props.removeTask.bind(this, props.task.title)}
          className="btn">
          <i className="fa fa-trash btn--s" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default Task;
