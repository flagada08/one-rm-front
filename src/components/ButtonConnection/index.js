import React from 'react';
import PropTypes from 'prop-types';

import './ButtonConnection.scss';

const ButtonConnection = ({
  toggleSettingOpen,
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
  </div>
);

ButtonConnection.propTypes = {
  toggleSettingOpen: PropTypes.func.isRequired,
};

export default ButtonConnection;
