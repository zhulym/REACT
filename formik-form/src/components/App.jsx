// libraries
import React from 'react';
// static
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
// styles
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h1>Anywhere in your app!</h1>
                    <Login />
                    <SignUp />
                </div>
            </header>
        </div>
    );
};

export default App;
