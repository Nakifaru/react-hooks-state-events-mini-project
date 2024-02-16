import React from "react";

function Task({ text, category, deleteThis}) {

  function handleDelete(event){
    deleteThis(event.target.value);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete" value={text}>X</button>
    </div>
  );
}

export default Task;
