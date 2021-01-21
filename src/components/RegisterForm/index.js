import React from 'react';
import PropTypes from 'prop-types';

const RegisterForm = ({
  email,
  password,
  lastname,
  firstname,
  OnSubmitRegister,
  setValueLastname,
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
              name="nom"
              placeholder="Nom"
              onChange={(event) => {
                setValueLastname(event.target.value);
              }}
              value={lastname}
            />
            <input
              name="prénom"
              placeholder="Prénom"
              onChange={(event) => {
                setValueFirstname(event.target.value);
              }}
              value={firstname}
            />
            <input
              name="email"
              placeholder="Adresse Email"
              onChange={(event) => {
                setValueEmail(event.target.value);
              }}
              value={email}
            />
            <input
              name="password"
              type="password"
              placeholder="Mot de passe"
              onChange={(event) => {
                setValuePassword(event.target.value);
              }}
              value={password}
            />
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
          </form>
        </div>
      )}
    </div>
  );
};

RegisterForm.propTypes = {
  email: PropTypes.string.isRequired,

  password: PropTypes.string.isRequired,

  lastname: PropTypes.string.isRequired,

  firstname: PropTypes.string.isRequired,

  setValueLastname: PropTypes.func.isRequired,

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
