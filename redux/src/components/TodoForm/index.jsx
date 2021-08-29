// libraries
import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/todos';

// styles

const TodoForm = () => {
  const dispatch = useDispatch()

  const createTodoItem = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.todoItem.value))
  }
  return (
    <div className="todo-list">
        <form onSubmit={createTodoItem}>
          <input type="text" name="todoItem"/>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default TodoForm;