import React from 'react';
import PropTypes from 'prop-types';

const RegisterForm = ({
  email,
  password,
  confirmPassword,
  lastname,
  firstname,
  gender,
  age,
  OnSubmitRegister,
  setValueLastname,
  setValueGender,
  setValueAge,
  setValueFitnessRoom,
  setValueFirstname,
  setValueEmail,
  setValuePassword,
  setValueConfirmPassword,
  setValueBoxPassword,
  boxPassword,
  CloseRegisterForm,
  allFitnessRoom,
  fitnessRoomSelected,
  // handleLogin,
  // handleLogout,
  isLogged,
  loggedMessage,
  confirmPasswordMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  console.log(allFitnessRoom);

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
            <select
              name="gender"
              className="login-form-input"
              placeholder="GENRE"
              onChange={(event) => {
                setValueGender(event.target.value);
              }}
            >
              <option value={gender}>
                --GENRE--
              </option>
              <option value="femme">
                --JE SUIS UNE MADAME--
              </option>
              <option value="homme">
                --JE SUIS UN MONSIEUR--
              </option>
            </select>
            <input
              name="age"
              placeholder="AGE"
              className="login-form-input"
              onChange={(event) => {
                setValueAge(event.target.value);
              }}
              value={age}
            />
            <select
              name="fitnessroom"
              placeholder="FITNESSROOM"
              className="login-form-input"
              onChange={(event) => {
                setValueFitnessRoom(event.target.value);
              }}
            >
              <option value="">
                --SALLE DE SPORT--
              </option>
              {
                allFitnessRoom && allFitnessRoom.map((fitnessRoom) => (
                  <option key={fitnessRoom.id} value={fitnessRoom.id}>
                    {fitnessRoom.name}
                  </option>
                ))
              }
            </select>
            {fitnessRoomSelected.length !== 0
            && (
            <input
              name="password"
              type="password"
              className="login-form-input"
              placeholder="Mot de passe de votre salle"
              onChange={(event) => {
                setValueBoxPassword(event.target.value);
              }}
              value={boxPassword}
            />
            )}

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
            <input
              name="confirm-password"
              type="password"
              className="login-form-input"
              placeholder="Confirmation du mot de passe"
              onChange={(event) => {
                setValueConfirmPassword(event.target.value);
              }}
              value={confirmPassword}
            />
            <span className="confirm-password-message">{confirmPasswordMessage}</span>
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

  fitnessRoomSelected: PropTypes.string.isRequired,

  boxPassword: PropTypes.string.isRequired,

  password: PropTypes.string.isRequired,

  lastname: PropTypes.string.isRequired,

  firstname: PropTypes.string.isRequired,

  setValueLastname: PropTypes.func.isRequired,

  setValueRole: PropTypes.func.isRequired,

  setValueBoxPassword: PropTypes.func.isRequired,

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
