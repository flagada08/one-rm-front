import React from 'react';

import ButtonConnection from 'src/components/ButtonConnection';
import './header.scss';

const Header = () => (
  <div className="header">
    <h1 className="page-title">
      O'ne RM
    </h1>
    <ButtonConnection />
  </div>
);

export default Header;
