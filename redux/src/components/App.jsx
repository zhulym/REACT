// libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';
//components
import ProtectedRoutes from './ProtectedRoutes/index';
import Header from './Header/index';
import Login from './Login';
// styles
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/login" component={Login} />
                <ProtectedRoutes />
            </Switch>

        </div>
    );
};

export default App;
