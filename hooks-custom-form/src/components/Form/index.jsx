//libraries
import React from 'react';
//hooks
import { useForm } from '../../hooks/useForm';
//constants
import { initialValues } from './constants';
//styles
import './Form.css';

const Form = () => {

  const { handleSubmit, formValues, ...rest } = useForm(initialValues);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="form__container">
      <div className="form__item">
        <form action="#" onSubmit={(e) => handleSubmit(e, handleFormSubmit)}>

          <div className="form__control">
            <label htmlFor="first-name">First Name</label>
            <input
              className="form__input"
              type="text"
              id="first-name"
              name="firstName"
              {...rest}
              placeholder="First name..." />
          </div>

          <div className="form__control">
            <label htmlFor="first-name">Last Name</label>
            <input
              className="form__input"
              type="text"
              id="lastName"
              name="lastName"
              {...rest}
              placeholder="Last name..." />
          </div>

          <button className="form__submit" type="submit">Submit</button>

        </form>
      </div>
    </div>
  );
}

export default Form;