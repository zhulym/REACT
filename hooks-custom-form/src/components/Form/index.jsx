//libraries
import React from 'react';
//hooks
import { useForm } from '../../hooks/useForm';
//constants
import { initialValues, validationShema } from './constants';
//styles
import './Form.css';

const Form = () => {

  const { handleSubmit, formValues, errors, ...rest } = useForm(initialValues, validationShema);


  const handleFormSubmit = (event) => {
    console.log(formValues)
  }
  console.log(errors)
  return (
    <div className="form__container">
      <div className="form__item">
        <form action="#" onSubmit={(event) => handleSubmit(event, handleFormSubmit)}>

          <div className="form__control">
            <label htmlFor="first-name">First Name</label>
            <input
              className="form__input"
              type="text"
              id="first-name"
              name="firstName"
              {...rest}
              placeholder="First name..." />
            <p style={{ color: '#a20000', fontSize: '14px' }}>{errors['firstName']}</p>
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
            <p style={{ color: '#a20000', fontSize: '14px' }}>{errors['lastName']}</p>
          </div>

          <button className="form__submit" type="submit">Submit</button>

        </form>
      </div>
    </div>
  );
}

export default Form;