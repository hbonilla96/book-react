let nextTodoId = 0;

export const addTodo = text => {
  console.log(text);
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  };
};

export const searchTodo = text => {
  return {
    type: "SEARCH_TODO",
    text
  };
};
