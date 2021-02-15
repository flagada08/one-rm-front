import React from 'react';
import PropTypes from 'prop-types';

import './buttondeconnection.scss';

const ButtonDeconnection = ({
  logOut,
}) => (
  <div>
    <button
      className="ButtonDeconnection"
      type="button"
      onClick={logOut}
    >
      DECONNEXION
    </button>
  </div>
);

ButtonDeconnection.propTypes = {
  logOut: PropTypes.func.isRequired,
};

export default ButtonDeconnection;
