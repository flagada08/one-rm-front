import React from 'react';

import './ButtonConnection.scss';
import LoginForm from 'src/components/LoginForm';

const ButtonConnection = () => (
  <div>
    <button type="submit" onClick={() => console.log('click')} className="ButtonConnection">
      CONNEXION
    </button>
  </div>
);

export default ButtonConnection;
