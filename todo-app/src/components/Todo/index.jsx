import React from 'react';
import TodoList from '../TodoList/index'

const Todo = () => {
  const todoList = [
    {id:1, title: 'Learn HTML/CSS', completed: true},
    {id:2, title: 'Learn JS', completed: true},
    {id:3, title: 'Learn REACT', completed: true},
    {id:4, title: 'Learn NODE.JS', completed: false},
    {id:5, title: 'Learn MySQL', completed: false},
  ]

//   const [state, setState] = useState(todoList);



  return (
    <div className="container">
        <h1>Todo List</h1>
        <div className="input-field">
            <input type="text" name="task" id="input-task" />
            <label htmlFor="input-task">Next todo</label>
        </div>

        <TodoList todos={todoList}/>
    </div>
  );
}

export default Todo;