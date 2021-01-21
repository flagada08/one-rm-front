export const FORM_REGISTER = 'FORM_REGISTER';
export const CLOSE_FORM_REGISTER = 'CLOSE_FORM_REGISTER';
export const FORM_INPUT_REGISTER_EMAIL = 'FORM_INPUT_REGISTER_EMAIL';
export const FORM_INPUT_REGISTER_PASSWORD = 'FORM_INPUT_REGISTER_PASSWORD';
export const FORM_INPUT_REGISTER_LASTNAME = 'FORM_INPUT_REGISTER_LASTNAME';
export const FORM_INPUT_REGISTER_FIRSTNAME = 'FORM_INPUT_REGISTER_FIRSTNAME';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';

export const formRegister = () => ({
  type: FORM_REGISTER,
});

export const formRegisterInputLastname = (newValue) => ({
  type: FORM_INPUT_REGISTER_LASTNAME,
  newValue,
});

export const formRegisterInputFirstname = (newValue) => ({
  type: FORM_INPUT_REGISTER_FIRSTNAME,
  newValue,
});

export const formRegisterInputEmail = (newValue) => ({
  type: FORM_INPUT_REGISTER_EMAIL,
  newValue,
});

export const formRegisterInputPassword = (newValue) => ({
  type: FORM_INPUT_REGISTER_PASSWORD,
  newValue,
});

export const closeFormRegister = () => ({
  type: CLOSE_FORM_REGISTER,
});

export const submitRegister = () => ({
  type: SUBMIT_REGISTER,
});
