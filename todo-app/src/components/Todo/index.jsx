import React, { useState, useEffect, useReducer } from "react";
import { ContextTodo } from "../context";
import { Button } from "reactstrap";
import TodoList from "../TodoList/index";
import reduser from "../../reduser";
//style
import "./Todo.scss";


const deadLine = 5000;

const Todo = () => {

  const [state, dispatch] = useReducer(
    reduser,
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [todoTitle, setTodoTitle] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const [titleBeforeEdit, setTitleBeforeEdit] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const checkDeadline = setInterval(() => {
      if (state.length === 0) return;
      const deadlineElem = state.find(
        (item) =>
          new Date().getTime() - item.deadLineTime >= deadLine && !item.completed && !item.className
      );

      if (deadlineElem) {
        const index = state.findIndex(
          (item) => item.title === deadlineElem.title
        );

        state.splice(index, 1, {
          id: deadlineElem.id,
          title: deadlineElem.title,
          className: "item__completed",
          date: deadlineElem.date,
          deadLineTime: deadlineElem.deadLineTime,
          completed: deadlineElem.completed,
        });
        localStorage.setItem("todos", JSON.stringify(state));
      }
    }, 1000);
    return () => {
      clearInterval(checkDeadline);
    }
  }, [state]);

  const addTodoItemOnClick = () => {
    if (!todoTitle) return;
    dispatch({
      type: "add-edit",
      title: todoTitle,
      edited: isEdited,
      titleBefore: titleBeforeEdit,
    });
    setTodoTitle("");
    setIsEdited(false);
  };

  return (
    <ContextTodo.Provider
      value={{ dispatch, setTodoTitle, setIsEdited, setTitleBeforeEdit }}
    >
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
            onChange={(event) => {
              setTodoTitle(event.target.value);
            }}
          />
        </div>

        <Button
          className="input-button"
          color="success"
          onClick={addTodoItemOnClick}
        >
          {!isEdited ? "Add new task" : "Edit task"}
        </Button>

        <TodoList todos={state} />
      </div>
    </ContextTodo.Provider>
  );
};

export default Todo;
