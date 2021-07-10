import * as yup from 'yup';

const minPasswordLength = 8;

export const LoginSchema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string()
        .required('No password provided.')
        .min(minPasswordLength, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});
