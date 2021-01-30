export const FORM_INPUT_PROFIL_LASTNAME = 'FORM_INPUT_PROFIL_LASTNAME';
export const FORM_INPUT_PROFIL_FIRSTNAME = 'FORM_INPUT_PROFIL_FIRSTNAME';
export const FORM_INPUT_PROFIL_EMAIL = 'FORM_INPUT_PROFIL_EMAIL';
export const FORM_INPUT_PROFIL_AGE = 'FORM_INPUT_PROFIL_AGE';
export const FORM_INPUT_PROFIL_FITNESSROMM = 'FORM_INPUT_PROFIL_FITNESSROMM';
export const FORM_INPUT_PROFIL_USER_DATA = 'FORM_INPUT_PROFIL_USER_DATA';

export const formInputProfilLastname = (newValue) => ({
  type: FORM_INPUT_PROFIL_LASTNAME,
  newValue,
});

export const formInputProfilFirstname = (newValue) => ({
  type: FORM_INPUT_PROFIL_FIRSTNAME,
  newValue,
});

export const formInputProfilEmail = (newValue) => ({
  type: FORM_INPUT_PROFIL_EMAIL,
  newValue,
});

export const formInputProfilAge = (newValue) => ({
  type: FORM_INPUT_PROFIL_AGE,
  newValue,
});

export const formInputProfilFitnessroom = (newValue) => ({
  type: FORM_INPUT_PROFIL_FITNESSROMM,
  newValue,
});

export const formInputProfilUserData = (lastname, firstname, email, age, name) => ({
  type: FORM_INPUT_PROFIL_USER_DATA,
  lastname,
  firstname,
  email,
  age,
  name,
});
