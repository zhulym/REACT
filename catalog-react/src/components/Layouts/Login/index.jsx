//libraries
import React, { useState, useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
//api
import { authUser } from '../../../api/auth';
//action
import { setCurrentUser } from '../../../actions/user';
//styles
import './Login.scss';

const Login = () => {

  const [formValues, setFormValues] = useState({});
  // const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  console.log(userState)

  const fetchLogin = async () => {
    try {
      const loginData = (await authUser(formValues)) || {};
      dispatch(setCurrentUser(loginData));
      // console.log(loginData)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login__page">
      <h2>Sign in to the site</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          fetchLogin();
        }}
        // onChange={(values) => {
        //   setFormValues(values);
        //   console.log(values)
        // }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              LOGIN
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Login;