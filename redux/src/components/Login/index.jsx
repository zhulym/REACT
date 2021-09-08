// libraries
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../actions/user';
import { Redirect } from 'react-router-dom';
//actions
// styles

const Login = () => {
    const dispatch = useDispatch();
    const userData = useSelector(({ user }) => user);
    const state = useSelector((state) => state);
    console.log(state)

    if (userData) {
        return <Redirect to="/" />;
    }

    const loginUser = event => {
        event.preventDefault();
        dispatch(setUserData({ userName: event.target.userName.value }));
    };

    return (
        <div className="login">
            <form onSubmit={loginUser}>
                <input type="text" name="userName" />
                <button type="submit">LOG IN</button>
            </form>
        </div>
    );
};

export default Login;