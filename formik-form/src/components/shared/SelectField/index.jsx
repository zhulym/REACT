// libraries
import React from 'react';
import { ErrorMessage } from 'formik';
// static
// styles

const SelectField = props => {
  return (
    <div className="select__container">
      <label className={props.className} htmlFor={props.id}>
        {props.label}
      </label>
      <select
        id={props.id}
        className={props.selectClassName}
        name={props.name}
        aria-label={props.ariaLabel}
        disabled={props.disabled}
        onChange={e => props.stateCallBack(e.target.value)}
      >
        {props.children}
      </select>
      <ErrorMessage name={props.name}>{msg => <div className="error">{msg}</div>}</ErrorMessage>
    </div>
  );
};

export default SelectField;
