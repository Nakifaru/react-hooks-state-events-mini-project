import React from "react";

function CategoryFilter({CATEGORIES, fitlerCategory}) {


  function handleClick(event) {
    event.target.classList.add('selected');
    fitlerCategory(event.target.value)
    console.log(event.target.value);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
      /* render <button> elements for each category here */
      CATEGORIES.map((category) => <button key={category} onClick={handleClick} value={category}> {category} </button>)
      }
    </div>
  );
}

export default CategoryFilter;
