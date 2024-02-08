import React from "react";

function Task({task, deleteTask}) {

  function handleDelete(event){
    deleteTask(event.target.value);
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={handleDelete} className="delete" value={task.text}>X</button>
    </div>
  );
}

export default Task;
