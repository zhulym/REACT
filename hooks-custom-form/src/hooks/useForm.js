import { useState } from 'react'

export const useForm = (initialValues, validationShema) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);

  const validateFieldValues = (name, value, shema) => {
    if (shema.required && !value) {
      setErrors(prevState => ({
        ...prevState,
        [name]: shema.message,
      }))
      return;
    }

    if (value && shema.regexp && !shema.regexp.test(value)) {
      setErrors(prevState => ({
        ...prevState,
        [name]: shema.message,
      }))
      return;
    }

    setErrors(prevState => ({
      ...prevState,
      [name]: '',
    }))
  }

  const handleFieldChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
    }))

    if (event.type === 'blur') {
      validateFieldValues(name, value, validationShema[name]);
    }
  }

  const handleSubmit = (event, onSubmit) => {
    event.preventDefault();
    Object.keys(formValues).forEach((key) => {
      validateFieldValues(key, formValues[key], validationShema[key]);
    });

    if (Object.keys(errors).some(key => errors[key])) {
      return;
    }

    onSubmit(formValues);
  }

  return {
    handleSubmit,
    onChange: handleFieldChange,
    onBlur: handleFieldChange,
    formValues,
    errors,
  }
}