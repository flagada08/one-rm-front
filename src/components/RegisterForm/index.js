import React from 'react';
import PropTypes from 'prop-types';

const RegisterForm = ({
  email,
  password,
  lastname,
  firstname,
  role,
  gender,
  fitnessRoom,
  age,
  OnSubmitRegister,
  setValueLastname,
  setValueGender,
  setValueRole,
  setValueAge,
  setValueFitnessRoom,
  setValueFirstname,
  setValueEmail,
  setValuePassword,
  CloseRegisterForm,
  // handleLogin,
  // handleLogout,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // handleLogin();
  };

  return (
    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            // onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (
        <div className="form-container">
          <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
            <input
              name="genre"
              className="login-form-input"
              placeholder="GENRE"
              onChange={(event) => {
                setValueGender(event.target.value);
              }}
              value={gender}
            />
            <input
              name="role"
              placeholder="ROLE"
              className="login-form-input"
              onChange={(event) => {
                setValueRole(event.target.value);
              }}
              value={role}
            />
            <input
              name="age"
              placeholder="AGE"
              className="login-form-input"
              onChange={(event) => {
                setValueAge(event.target.value);
              }}
              value={age}
            />
            <input
              name="fitnessroom"
              placeholder="FITNESSROOM"
              className="login-form-input"
              onChange={(event) => {
                setValueFitnessRoom(event.target.value);
              }}
              value={fitnessRoom}
            />
            <input
              name="nom"
              placeholder="Nom"
              className="login-form-input"
              onChange={(event) => {
                setValueLastname(event.target.value);
              }}
              value={lastname}
            />
            <input
              name="prénom"
              placeholder="Prénom"
              className="login-form-input"
              onChange={(event) => {
                setValueFirstname(event.target.value);
              }}
              value={firstname}
            />
            <input
              name="email"
              placeholder="Adresse Email"
              className="login-form-input"
              onChange={(event) => {
                setValueEmail(event.target.value);
              }}
              value={email}
            />
            <input
              name="password"
              type="password"
              className="login-form-input"
              placeholder="Mot de passe"
              onChange={(event) => {
                setValuePassword(event.target.value);
              }}
              value={password}
            />
            <div className="button-login-form-container">
              <button
                type="submit"
                className="login-form-button"
                onClick={OnSubmitRegister}
              >
                OK
              </button>
              <button
                type="button"
                className="login-form-button"
                onClick={CloseRegisterForm}
              >
                &#x25C4; RETOUR
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

RegisterForm.propTypes = {
  email: PropTypes.string.isRequired,

  role: PropTypes.string.isRequired,

  gender: PropTypes.string.isRequired,

  age: PropTypes.string.isRequired,

  fitnessRoom: PropTypes.string.isRequired,

  password: PropTypes.string.isRequired,

  lastname: PropTypes.string.isRequired,

  firstname: PropTypes.string.isRequired,

  setValueLastname: PropTypes.func.isRequired,

  setValueRole: PropTypes.func.isRequired,

  setValueAge: PropTypes.func.isRequired,

  setValueFitnessRoom: PropTypes.func.isRequired,

  setValueGender: PropTypes.func.isRequired,

  setValueFirstname: PropTypes.func.isRequired,

  OnSubmitRegister: PropTypes.func.isRequired,

  setValueEmail: PropTypes.func.isRequired,

  CloseRegisterForm: PropTypes.func.isRequired,

  setValuePassword: PropTypes.func.isRequired,

  // handleLogin: PropTypes.func.isRequired,

  // handleLogout: PropTypes.func.isRequired,

  isLogged: PropTypes.bool,

  loggedMessage: PropTypes.string,

};

RegisterForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default RegisterForm;
