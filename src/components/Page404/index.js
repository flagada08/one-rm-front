import React from 'react';
import image404 from '/public/img/404-1.svg';
import { Link } from 'react-router-dom';

import './page404.scss';

const Page404 = () => (
  <div className="Page404">
    <img className="image404" src={image404} alt="image404" />
    <Link className="link404" to="/">  Retour a la page d'accueil</Link>
  </div>
);

export default Page404;
