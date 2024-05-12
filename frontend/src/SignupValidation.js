function validation(values) {
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/; // Ensures 8 characters minimum

    if (!values.name) {
        errors.name = "Name should not be empty";
    }

    if (!values.email) {
        errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Invalid email format";
    }

    if (!values.password) {
        errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password must be at least 8 characters, include one uppercase letter, one lowercase letter, and one digit.";
    }

    return errors;
}

export default validation;
