import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import AddTodo from "./pages/AddTodo/container";
import TodoList from "./pages/TodoList/container";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoList />
    </Provider>
  );
}

export default App;
