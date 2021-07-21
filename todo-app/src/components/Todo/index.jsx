import React, { useState, useEffect, useReducer } from "react";
import { ContextTodo } from "../context";
import { Button } from "reactstrap";
import TodoList from "../TodoList/index";
import reduser from "../../reduser";

const Todo = () => {
  const [state, dispatch] = useReducer(
    reduser,
    JSON.parse(localStorage.getItem("todos"))
  );

  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const addTodoItem = (event) => {
    if (event.target.value === "") return;
    if (event.key === "Enter") {
      dispatch({
        type: "add",
        payload: todoTitle,
      });
      setTodoTitle("");
    }
  };

  const addTodoItemOnClick = () => {
    if (todoTitle === "") return;
    dispatch({
      type: "add",
      payload: todoTitle,
    });
    setTodoTitle("");
  };

  return (
    <ContextTodo.Provider value={{ dispatch }}>
      <div className="container">
        <h1>Todo App</h1>
        <div className="input-field">
          <label className="input-label" htmlFor="input-task">
            Next todo
          </label>

          <input
            type="text"
            name="task"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            onKeyPress={addTodoItem}
          />
        </div>

        <Button
          className="input-button"
          color="success"
          onClick={addTodoItemOnClick}
        >
          Add new task
        </Button>

        <TodoList todos={state} />
      </div>
    </ContextTodo.Provider>
  );
};

export default Todo;
