import * as yup from 'yup';

const minPasswordLength = 1;
const minZipLength = 5;

export const SignUpSchema = yup.object().shape({
    name: yup
        .string()
        .required('Enter your Name!')
        .matches(/[a-zA-Z ]/, 'Only  latin letters!'),
    lastName: yup
        .string()
        .required('Enter your Last Name!')
        .matches(/[a-zA-Z ]/, 'Only  latin letters!'),
    email: yup
        .string()
        .email('Enter correct Email!')
        .required('Enter your Email!'),
    address: yup
        .string()
        .required('Enter your Address!')
        .matches(/[a-zA-Z0-9 ]/, 'Only  latin letters and integers!'),
    password: yup
        .string()
        .required('No password provided!')
        .min(minPasswordLength, 'Password is too short - should be 1 chars minimum!')
        .matches(/[a-zA-Z0-9]/, 'Password can only contain Latin letters!'),
    zip: yup.string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(minZipLength, 'Must be exactly 5 digits')
        .max(minZipLength, 'Must be exactly 5 digits'),
    checkbox: yup
        .bool()
        .oneOf([true], 'Accept conditions!'),
    state: yup
        .string()
        .required('State is a required field!'),
    country: yup
        .string(),
});