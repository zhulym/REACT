// libraries
import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
// static
// styles

const Form = props => {
    const FieldComponent = props.fields;

    return (
        <div className="form">
            <Formik
                className="form__item"
                enableReinitialize
                initialValues={props.initialValues}
                onSubmit={props.onSubmitCallback}
                validationSchema={props.validationSchema}
            >
                { formikProps => (
                    <FormikForm>
                        <FieldComponent {...formikProps} />
                    </FormikForm>
                )}
            </Formik>
        </div>
    );
};

export default Form;