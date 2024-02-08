import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";


import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [myTasks, setMyTasks] = useState(TASKS);
  //const [filteredTasks, setFilteredTasks] = useState(myTasks);

  function onTaskFormSubmit(task) {
    setMyTasks([...myTasks, task])
  }
  console.log(myTasks);


  function deleteTask(text) {
    setMyTasks(myTasks.filter(task => task.text !== text))
  }

  function fitlerCategory(category) {
    setMyTasks(myTasks.filter(task => {
      if (category === "All") return true;
      return task.category === category;
    }))
    console.log(category);
  }

  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} fitlerCategory={fitlerCategory}/>
      <NewTaskForm CATEGORIES={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList myTasks={myTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
