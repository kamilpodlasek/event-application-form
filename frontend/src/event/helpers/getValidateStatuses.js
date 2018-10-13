export function getValidateStatuses({ touched, errors }) {
    return Object.entries(touched).reduce((acc, [fieldName, fieldTouched]) => {
        if (!fieldTouched) {
            return acc;
        }

        if (errors[fieldName]) {
            return { ...acc, [fieldName]: 'error' };
        }

        return { ...acc, [fieldName]: 'success' };
    }, {});
}
