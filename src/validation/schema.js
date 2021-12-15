import * as yup from 'yup';

const schema = yup.object().shape({
    fname: yup
        .string()
        .trim()
        .required('First name is required')
        .min(3, 'Name must be 3 characters long'),
    lname: yup
        .string()
        .trim()
        .required('First name is required')
        .min(3, 'Name must be 3 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required'),
    terms: yup.boolean()
})

export default schema;