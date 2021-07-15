import React from 'react';
import TodoItem from './TodoItem/index'

const TodoList = (props) => {

  return (
      <div className="todo__list">
          <div className="list__container">
              {props.todos.map(item => <TodoItem key={item.id} {...item} />)}
          </div>
      </div>
  );
}

export default TodoList;