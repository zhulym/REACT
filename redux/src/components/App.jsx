// libraries
import React from 'react';
import TodoForm from "./TodoForm/index"
import TodoList from "./TodoList/index"

// styles
import './App.css';

const App = () => {
    return (
            <div className="App">
                <TodoForm />
                <TodoList />
            </div>
    );
};

export default App;
