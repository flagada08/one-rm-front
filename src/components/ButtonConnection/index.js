import React from 'react';
import PropTypes from 'prop-types';

import './ButtonConnection.scss';

const ButtonConnection = ({
  toggleSettingOpen,
  isOpen,
  closeLoginForm,
}) => (
  <div>
    <button
      className="ButtonConnection"
      type="button"
      onClick={!isOpen ? toggleSettingOpen : closeLoginForm}
    >
      {!isOpen ? 'CONNEXION' : 'FERMER'}
    </button>
  </div>
);

ButtonConnection.propTypes = {
  toggleSettingOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeLoginForm: PropTypes.func.isRequired,
};

export default ButtonConnection;
