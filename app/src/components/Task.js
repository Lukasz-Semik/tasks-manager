import React from 'react';

const Task = (props) => {
  const titleClass = props.task.isDone ?
                     "task_display__item--title crossed"
                     : "task_display__item--title"
  return(
    <div className="task-display__item">
      <h2 className={titleClass}>{props.task.title}</h2>
      <div className="task-display__item--date">
        <p>{props.task.date}</p>
        <span>
          <button onClick={props.changeTaskStatus.bind(this,props.task.title)}
            className="btn">
            <i className="fa fa-check-square btn--s" aria-hidden="true"></i>
          </button>
          <button onClick={props.removeTask.bind(this, props.task.title)}
            className="btn">
            <i className="fa fa-trash btn--s" aria-hidden="true"></i>
          </button>
        </span>
      </div>
    </div>
  );
}

export default Task;
