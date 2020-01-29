import React from "react";
import "./App.scss";
import BookDetailComponent from "./pages/book-details/book-details.component";
import HeaderComponent from "./pages/header/header.component";

function App() {
  return (
    <div className="App">
      <div>
        <HeaderComponent></HeaderComponent>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <BookDetailComponent></BookDetailComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
