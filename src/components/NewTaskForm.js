import React from "react";

function NewTaskForm({ CATEGORIES }) {

  const categoriesExcFilter = CATEGORIES.filter(category => category !== "All")

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {
          /* render <option> elements for each category here */
          categoriesExcFilter.map((category) =>  <option key={category} > {category} </option>)
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
