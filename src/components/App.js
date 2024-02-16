import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";


import { CATEGORIES, TASKS } from "../data";

function App() {

  const [myTasks, setMyTasks] = useState(TASKS);
  //const [filteredTasks, setFilteredTasks] = useState(myTasks);

  function onTaskFormSubmit(task) {
    setMyTasks([...myTasks, task])
  }


  function deleteTask(text) {
    setMyTasks(myTasks.filter((task) => task.text !== text))
  }

  function fitlerCategory(category) {
    setMyTasks(myTasks.filter(task => {
      if (category === "All") return true;
      return task.category === category;
    }))
    console.log('When filtering:',category);
  }

  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} fitlerCategory={fitlerCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList displayTasks={myTasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
