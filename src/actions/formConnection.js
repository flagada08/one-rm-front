// === action types
export const FORM_CONNECTION = 'FORM_CONNECTION';
export const CLOSE_LOGIN_FORM = 'CLOSE_LOGIN_FORM';

export const formConnection = () => ({
  type: FORM_CONNECTION,
});

export const closeLoginForm = () => ({
  type: CLOSE_LOGIN_FORM,
});
