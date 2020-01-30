import React from "react";

const AddTodo = ({ actions }) => {
  let input;
  let inputSearch;

  const onSubmit = event => {
    event.preventDefault();
    actions.addTodo(input.value);
    input.value = "";
  };

  const onSearch = event => {
    event.preventDefault();
    actions.searchTodo(inputSearch.value);
  };

  return (
    <div>
      <form onSubmit={event => onSearch(event)}>
        <input ref={node => (inputSearch = node)}></input>
        <button type="submit">Search Todo</button>
      </form>

      <form onSubmit={event => onSubmit(event)}>
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
