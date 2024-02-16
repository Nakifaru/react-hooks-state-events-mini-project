import React, { useState } from "react";

function NewTaskForm({ categories,onTaskFormSubmit }) {

  const categoriesExcAll = categories.filter(category => category !== "All");
  const [details, setDetails] = useState("");
  const [selected, setSelected] = useState("")


  function handleDetails(event) {
    setDetails(event.target.value)
  }

  function handleSelect(event) {
    setSelected(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      text: details,
      category: selected
    };
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetails}/>
      </label>
      <label>
        Category
        <select onChange={handleSelect} name="category">
          {
          /* render <option> elements for each category here */
          categoriesExcAll.map((category) =>  <option key={category} > {category} </option>)
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
