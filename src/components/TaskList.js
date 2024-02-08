import React from "react";
import Task from "./Task";

function TaskList({ TASKS }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */
      TASKS.map( function(task) {
        return <Task task={task} key={task.text}/>
      })
      }
    </div>
  );
}

export default TaskList;
