import React from 'react';
import HeaderProfil from 'src/containers/HeaderProfil';
import Footer from 'src/components/Footer';
import Exercices from 'src/components/Exercices';
import { Link } from 'react-router-dom';

import './exerciserecap.scss';

const ExerciseRecap = () => (
  <div className="exercicerecap-container">
    <HeaderProfil />
    <div className="exercices-container">
      <div className="exercice-title-container">
        <div className="exercice-title">exercices</div>
        <div className="exercice-title">objectif</div>
        <div className="exercice-title">progression vers objectif</div>
      </div>
      <Exercices />
      <Exercices />
      <Exercices />
      <Exercices />
      <Exercices />
      <Exercices />
      <Exercices />
      <Exercices />
      <Exercices />
    </div>
    <Footer />
  </div>
);

ExerciseRecap.propTypes = {

};

export default ExerciseRecap;
