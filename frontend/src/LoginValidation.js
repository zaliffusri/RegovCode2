function validation(values) {
    let errors = {};

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email format";
    }

    if (!values.password) {
        errors.password = "Password is required";
    }

    return errors;
}


export default validation;