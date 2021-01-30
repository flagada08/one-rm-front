// === action types
export const FORM_INPUT_LOGIN_EMAIL = 'FORM_INPUT_LOGIN_EMAIL';
export const FORM_INPUT_LOGIN_PASSWORD = 'FORM_INPUT_LOGIN_PASSWORD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';
export const REDIRECT = 'REDIRECT';

export const formLoginInputEmail = (newValue) => ({
  type: FORM_INPUT_LOGIN_EMAIL,
  newValue,
});

export const formLoginInputPassword = (newValue) => ({
  type: FORM_INPUT_LOGIN_PASSWORD,
  newValue,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const loggedIn = () => ({
  type: LOGGED_IN,
});

export const loggedOut = () => ({
  type: LOGGED_OUT,
});

export const redirect = () => ({
  type: REDIRECT,
});
