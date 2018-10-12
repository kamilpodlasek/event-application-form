const yup = require('yup');

module.exports = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .required('First name is required'),
    lastName: yup
        .string()
        .trim()
        .required('Last name is required'),
    email: yup
        .string()
        .email('E-mail must be valid')
        .required('E-mail is required'),
    date: yup
        .date()
        .nullable()
        .typeError('Date must be valid')
        .required('Date is required'),
});
