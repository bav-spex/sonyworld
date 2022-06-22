export const emailValidator = (email) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        return 'error';
    } else {
        return 'success';
    }
}

