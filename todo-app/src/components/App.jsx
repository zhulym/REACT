import React from "react";
import Todo from "./Todo/index";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

const App = () => {
  return (
    <div className="app-header">
      <Todo />
    </div>
  );
};

export default App;
