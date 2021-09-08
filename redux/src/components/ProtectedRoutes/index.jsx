// libraries
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//components
import Catalog from '../Catalog/index';
import Cart from '../Cart/index';
import { useSelector } from 'react-redux';
// styles


const ProtectedRoutes = () => {
    const userData = useSelector(({ user }) => user);

    if (!userData) {
        return <Redirect to="/login" />;
    }

    return (
        <>
            <Route exact path="/" component={Catalog} />
            <Route path="/cart" component={Cart} />
        </>
    );
};

export default ProtectedRoutes;