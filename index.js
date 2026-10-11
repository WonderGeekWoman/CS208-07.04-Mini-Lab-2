function isStrongPassword(password) {

    let hasUCLet = false;
    for (let char of password) {
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            hasUCLet = true;
            break;
        }
    }
    if (password.length < 8) {
        return false;
    }
    if (password.indexOf("password") !== -1) {
        return false;
    }
    if (hasUCLet == false) {
        return false;
    }
    else {
        return true;
    }
}

// Do NOT remove the following line:
export default isStrongPassword;
