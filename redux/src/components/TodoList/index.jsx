// libraries
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../actions/todos';

const TodoList = () => {
  const todoList = useSelector(({ todos }) => todos);
  const dispatch = useDispatch();

  const deleteTodoItem = (index) => {
    dispatch(deleteTodo(index))
  }

  return (
    <div className="todo-list">
        {todoList.map((todo,index) => (
          <div key={todo+index}>
          <p>{todo}</p>
            <button
              type="button"
              onClick={() => deleteTodoItem(index)}
            >
              Delete
            </button>

          </div>
        ))}
    </div>
  );
};

export default TodoList;