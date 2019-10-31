export const checkValidity = (value, rules) => {
    let isValid = true;
    let reason = '';

    if (!rules) {
        return [true, ''];
    };

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (!pattern.test(value)) {
            isValid = false;
            reason = 'Invalid email address';
        };
    };

    if (rules.required) {
        if (value.trim() === '') {
            isValid = false;
            reason = 'Required';
        };
    };

    return [isValid, reason];
}