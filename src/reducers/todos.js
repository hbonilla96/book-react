const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
    case "SEARCH_TODO":
      return [
        ...state.filter(item => {
          return item.text === action.text;
        })
      ];
    default:
      return state;
  }
};

export default todos;
