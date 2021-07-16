// libraries
import React, { useState } from 'react';
// static
import { ErrorMessage, Field } from 'formik';
// styles
import './styles.scss';

const classMapping = {
  text: 'fields__input',
  password: 'fields__input',
  select: 'fields__select',
  email: 'fields__input',
  checkbox: 'fields__checkbox',
};

const FormControl = ({ id, type = 'text', name, label, placeholder, autocomplete, errors, touched, children }) => {
  const [isChecked, setIsChecked] = useState('checked');

  return (
    <div className="form-control">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      {children}
      <Field
        className={`${errors[name] && touched[name] ? 'invalid__error' : ''} 
             ${!errors[name] && touched[name] ? 'valid__value' : ''} 
             ${classMapping[type]}`}
        type={type}
        name={name}
        placeholder={placeholder}
        autocomplete={autocomplete}
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />
      <ErrorMessage name={name}>{msg => <div className="error">{msg}</div>}</ErrorMessage>
    </div>
  );
};

export default FormControl;
