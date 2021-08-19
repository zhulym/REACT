export const initialValues = {
  firstName: '',
  lastName: '',
}

export const validationShema = {
  firstName: {
    required: true,
    regexp: /[A-Za-z]/gi,
    message: 'First name incorrect!'
  },
  lastName: {
    required: false,
    regexp: /[A-Za-z]/gi,
    message: 'Last name incorrect!'
  },
}