//libraries
import React, { useState, useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
//api
import { authUser } from '../../../api/auth';
//action
import { setUserData } from '../../../actions/user';
//styles
import './Login.scss';


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required")
});

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const handleSubmit = async (data) => {
    try {
      const user = (await authUser(data)) || {};
      dispatch(setUserData(user));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">Login Form</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{ email: "user@mail.com", password: "pass123" }}
            validationSchema={LoginSchema}
            onSubmit={({ setSubmitting }) => {
              alert("Form is validated! Submitting the form...");
              setSubmitting(false);
              handleSubmit();
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className={`form-control ${touched.email && errors.email ? "is-invalid" : ""
                      }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className={`form-control ${touched.password && errors.password ? "is-invalid" : ""
                      }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="invalid-feedback"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-info btn-block login__button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please wait..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;