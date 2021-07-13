import React from 'react';
import TodoItem from './TodoItem/index'

const TodoList = (props) => {

  return (
    <div className="container">
      <div className="todo__list">
          <ul className="list__container">
              {props.todos.map(item => <TodoItem key={item.id} {...item} />)}
          </ul>
      </div>
    </div>
  );
}

export default TodoList;