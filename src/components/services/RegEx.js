
const emailRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;

const passwordRegex = /^(?=.*[A-Z]).{8,}$/;

export {
    emailRegex,
    passwordRegex
}