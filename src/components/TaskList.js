import React from "react";
import Task from "./Task";

function TaskList({ displayTasks, onDelete }) {


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */
      displayTasks.map( (task) => <Task text={task.text} category={task.category} key={task.text} deleteThis={onDelete}/>)
      }
    </div>
  );
}

export default TaskList;
