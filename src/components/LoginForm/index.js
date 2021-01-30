import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const LoginForm = ({
  email,
  password,
  OpenRegisterForm,
  setValueEmail,
  setValuePassword,
  submitLogIn,
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
          <form autoComplete="off" className="login-form-element" method="post" onSubmit={handleSubmit}>
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
                onClick={submitLogIn}
              >
                OK
              </button>
              <button
                type="button"
                className="register-form-button"
                onClick={OpenRegisterForm}
              >
                Créer un compte
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,

  password: PropTypes.string.isRequired,

  setValueEmail: PropTypes.func.isRequired,

  setValuePassword: PropTypes.func.isRequired,

  submitLogIn: PropTypes.func.isRequired,

  OpenRegisterForm: PropTypes.func.isRequired,

  // handleLogin: PropTypes.func.isRequired,

  // handleLogout: PropTypes.func.isRequired,

  isLogged: PropTypes.bool,

  loggedMessage: PropTypes.string,

};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
