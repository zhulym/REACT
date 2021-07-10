// libraries
import React from 'react';

// static
import Fields from './Fields/Fields';
import Form from '../shared/Form/Form';
import { LoginSchema } from './Fields/config';
// styles

const Login = () => {
    return (
        <div className="login">
            <h2>Login</h2>
            <Form
                fields={Fields}
                initialValues={{ name: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmitCallback={ values => console.log(values)}
            />
        </div>
    );
};

export default Login;