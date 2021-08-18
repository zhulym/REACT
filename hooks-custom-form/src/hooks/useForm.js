import { useState } from 'react'

export const useForm = (initialValues) => {
  const [formValues, setFormValues] = useState(initialValues);

  const onChange = (e) => {
    // Проверка при необходимости
    // if(!formValues[e.target.name]) {
    //   console.error('Check initial values')
    // }
    const name = e.target.name;
    const value = e.target.value;

    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
    }))

    console.log(formValues)
  }

  const handleSubmit = (e, onSubmit) => {
    onSubmit(e);
  }
  return { handleSubmit, onChange, onBlur }
}