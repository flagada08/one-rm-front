import React from 'react';
import PropTypes from 'prop-types';

import './ButtonConnection.scss';
import LoginForm from 'src/components/LoginForm';

const ButtonConnection = ({
  toggleSettingOpen,
  isOpen,
}) => (
  <div>
    <button
      className="ButtonConnection"
      type="button"
      onClick={
          toggleSettingOpen
      }
    >
      CONNEXION
    </button>
    {isOpen && <LoginForm />}
  </div>
);

ButtonConnection.propTypes = {
  toggleSettingOpen: PropTypes.func.isRequired,
};

export default ButtonConnection;
