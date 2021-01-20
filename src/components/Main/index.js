import React from 'react';
import image from '/public/img/img-test.jpg';
import './main.scss';

const Main = () => (
  <div className="welcome-slider">
    <h1 className="welcome">Bienvenue sur O'ne RM</h1>
    <img className="slider" src={image} alt="slider" />
  </div>
);

export default Main;
