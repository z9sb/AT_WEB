import XRegExp from "xregexp";

const emailRegex = XRegExp('^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,6}$');

export const isValidEmail = (email: string) => emailRegex.test(email);

const passwordRegex = XRegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');

export const isValidPassword = (password: string) => passwordRegex.test(password);