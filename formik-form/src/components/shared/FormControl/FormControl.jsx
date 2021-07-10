// libraries
import React from 'react';
// static
import { ErrorMessage, Field } from 'formik';
// styles

const FormControl = props => {
    return (
        <div className="form-control">
            <label htmlFor={props.id}></label>
            <Field
                className={props.className}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
            />
            <ErrorMessage name={props.name} />
        </div>
    );
};

export default FormControl;