export const FORM_REGISTER = 'FORM_REGISTER';
export const CLOSE_FORM_REGISTER = 'CLOSE_FORM_REGISTER';
export const FORM_INPUT_REGISTER_EMAIL = 'FORM_INPUT_REGISTER_EMAIL';
export const FORM_INPUT_REGISTER_PASSWORD = 'FORM_INPUT_REGISTER_PASSWORD';
export const FORM_INPUT_REGISTER_CONFIRM_PASSWORD = 'FORM_INPUT_REGISTER_CONFIRM_PASSWORD';
export const FORM_INPUT_REGISTER_LASTNAME = 'FORM_INPUT_REGISTER_LASTNAME';
export const FORM_INPUT_REGISTER_FIRSTNAME = 'FORM_INPUT_REGISTER_FIRSTNAME';
export const FORM_INPUT_REGISTER_GENDER = 'FORM_INPUT_REGISTER_GENDER';
export const FORM_INPUT_REGISTER_AGE = 'FORM_INPUT_REGISTER_AGE';
export const FORM_INPUT_REGISTER_ROLE = 'FORM_INPUT_REGISTER_ROLE';
export const FORM_INPUT_REGISTER_FITNESSROOM = 'FORM_INPUT_REGISTER_FITNESSROOM';
export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const FORM_INPUT_REGISTER_BOX_PASSWORD = 'FORM_INPUT_REGISTER_BOX_PASSWORD';
export const FETCH_REGISTER_DATA = 'FETCH_REGISTER_DATA';
export const ALL_FITNESS_ROOM_DATA = 'ALL_FITNESS_ROOM_DATA';
export const CONFIRM_PASSWORD_MESSAGE = 'CONFIRM_PASSWORD_MESSAGE';

export const formRegister = () => ({
  type: FORM_REGISTER,
});

export const formRegisterInputGender = (newValue) => ({
  type: FORM_INPUT_REGISTER_GENDER,
  newValue,
});

export const formRegisterInputFitnessRoom = (newValue) => ({
  type: FORM_INPUT_REGISTER_FITNESSROOM,
  newValue,
});

export const formRegisterInputRole = (newValue) => ({
  type: FORM_INPUT_REGISTER_ROLE,
  newValue,
});

export const formRegisterInputAge = (newValue) => ({
  type: FORM_INPUT_REGISTER_AGE,
  newValue,
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

export const formRegisterInputConfirmPassword = (newValue) => ({
  type: FORM_INPUT_REGISTER_CONFIRM_PASSWORD,
  newValue,
});

export const closeFormRegister = () => ({
  type: CLOSE_FORM_REGISTER,
});

export const submitRegister = () => ({
  type: SUBMIT_REGISTER,
});

export const formRegisterInputBoxPassword = (newValue) => ({
  type: FORM_INPUT_REGISTER_BOX_PASSWORD,
  newValue,
});

export const fetchRegisterData = () => ({
  type: FETCH_REGISTER_DATA,
});

export const allFitnessRoom = (fitnessRoomData) => ({
  type: ALL_FITNESS_ROOM_DATA,
  fitnessRoomData,
});

export const confirmPasswordMessage = () => ({
  type: CONFIRM_PASSWORD_MESSAGE,
});
