import React, { useState, useEffect } from "react";
import { ContextTodo } from "../context";
import { Button } from "reactstrap";
import TodoList from "../TodoList/index";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    const tasks = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(tasks));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: new Date(),
        title: todoTitle,
        completed: false,
      },
    ]);
    setTodoTitle("");
  };

  const addTodoItem = (event) => {
    if (event.target.value === "") return;
    if (event.key === "Enter") {
      addTodo();
    }
  };

  const addTodoItemOnClick = () => {
    if (todoTitle === "") return;
    addTodo();
  };

  const removeTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <ContextTodo.Provider value={{ removeTodo, toggleTodo }}>
      <div className="container">
        <h1>Todo App</h1>
        <div className="iii"></div>
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

        <TodoList todos={todos} />
      </div>
    </ContextTodo.Provider>
  );
};

export default Todo;
