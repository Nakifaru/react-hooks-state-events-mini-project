import React from "react";
import Task from "./Task";

function TaskList({ myTasks, deleteTask }) {



  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */
      myTasks.map( function(task) {
        return <Task task={task} key={task.text} deleteTask={deleteTask}/>
      })
      }
    </div>
  );
}

export default TaskList;
