import React from "react";
import TodoItem from "./TodoItem/index";

const TodoList = (props) => {
  return (
    <div className="todo__list">
      <div className="list__container">
        {props.todos.map((item, i) => (
          <TodoItem key={item.id} point={i + 1} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
