//libraries
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import { useHistory } from 'react-router-dom';
//constants
import { PRODUCTS_PAGE, ADMIN_PAGE } from '../../../constants/routes';
//api
import { authUser } from '../../../api/auth';
//actions
import { setUserData } from '../../../actions/user';
//styles
import './Login.scss';
import "bootstrap/dist/css/bootstrap.css";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const userData = useSelector(({ user }) => user);

  useEffect(() => {
    if (!userData) {
      return;
    }
    if (userData.isAdmin) {
      history.push(ADMIN_PAGE.path);
      return;
    }
    history.push(PRODUCTS_PAGE.path)
  }, [userData])

  const handleSubmit = async (values) => {
    console.log(values)
    setErrorMessage('');
    try {
      const user = await authUser(values) || {};
      dispatch(setUserData(user));
    } catch (e) {
      setErrorMessage(e.error);
      console.log(e.error);
    }
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be 3 characters at minimum")
      .required("Password is required")
  });

  return (
    <div className="container">
      {!!errorMessage && (
        <div className="row mb-5 login__error-wrap">
          <div className="col-lg-12 text-center">
            <p className="mt-5 login__error-message">{errorMessage}</p>
          </div>
        </div>
      )}
      <div className="row mb-5">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5 login__heading">Login</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{ email: "user@mail.com", password: "pass123" }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              handleSubmit(values);
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form className="login-form__wrapper">
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