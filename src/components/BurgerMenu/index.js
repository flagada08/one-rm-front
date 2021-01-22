import React from 'react';
import BurgerListe from 'src/components/BurgerListe';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './burgermenu.scss';

const BurgerMenu = ({
  BurgerMenuIsOpen,
  toggleBurgerMenu,
}) => {
  // TODO à changer
  const cssClassDiv1 = classNames('bar', { 'bar--change1': BurgerMenuIsOpen });
  const cssClassDiv2 = classNames('bar', { 'bar--change2': BurgerMenuIsOpen });
  const cssClassDiv3 = classNames('bar', { 'bar--change3': BurgerMenuIsOpen });
  return (
    <div
      className="BurgerMenu"
    >
      <div
        type="button"
        onClick={toggleBurgerMenu}
      >
        <div className={cssClassDiv1} />
        <div className={cssClassDiv2} />
        <div className={cssClassDiv3} />
      </div>

      <div>
        {BurgerMenuIsOpen && <BurgerListe />}
      </div>
    </div>
  );
};

BurgerMenu.propTypes = {
  BurgerMenuIsOpen: PropTypes.bool.isRequired,
  toggleBurgerMenu: PropTypes.func.isRequired,
};

export default BurgerMenu;
