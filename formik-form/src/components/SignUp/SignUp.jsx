// libraries
import React from 'react';

// static
import Fields from './Fields/Fields';
import Form from '../shared/Form/Form';
import { SignUpSchema } from './Fields/config';
// styles

const SignUp = () => {
    return (
        <div className="login">
            <h2>Registration</h2>
            <Form
                fields={Fields}
                initialValues={{ name: '', lastName: '', email: '', password: '' }}
                validationSchema={SignUpSchema}
                onSubmitCallback={ values => console.log(values)}
            />
        </div>
    );
};

export default SignUp;