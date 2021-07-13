import React from 'react';

const TodoItem = (props) => {

  return (
      <div className="todo__item">
        <li >
            <input type="checkbox" defaultChecked={false} />
            <span>{props.title}</span>
            <span><button><img src="" alt="delete" /></button></span>
        </li>
      </div>
  );
}

export default TodoItem;