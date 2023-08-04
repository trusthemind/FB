
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/m;

const passwordRegex = /^(?=.*[A-Z]).{8,}$/;

export {
    emailRegex,
    passwordRegex
}