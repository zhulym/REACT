// libraries
import React, { useState } from 'react';

// static
import Fields from './Fields/Fields';
import Form from '../shared/Form/Form';
import { SignUpSchema } from './Fields/config';
// styles

const SignUp = () => {
  const [stateForCountry, setStateForCountry] = useState('');

  return (
    <div className="login">
      <h2>Registration</h2>
      <Form
        novalidate
        fields={Fields}
        initialValues={{
          name: '',
          lastName: '',
          email: '',
          password: '',
          address: '',
          zip: '',
          country: 'USA',
          state: `${stateForCountry}`,
        }}
        validationSchema={SignUpSchema}
        stateCallBack={setStateForCountry}
        onSubmitCallback={values => console.log(values)}
      />
    </div>
  );
};

export default SignUp;
