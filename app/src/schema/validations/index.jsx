import * as yup from "yup";

const validationSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    gender: yup.string().required('Gender is required'),
    dropdown1: yup.string().required('Dropdown 1 is required'),
    dropdown2: yup.string().required('Dropdown 2 is required'),
    dropdown3: yup.string().required('Dropdown 3 is required'),
    file: yup.mixed().required('File is required'),
    dateOfBirth: yup.date().required('Date of Birth is required'),
});

export default validationSchema;
