import React from 'react';
import Chart from 'src/components/Chart';
import imageExercise from '/public/img/deadlift.jpeg';
import { Star } from 'react-feather';

import './detailexercise.scss';

const DetailExercise = () => (
  <div className="DetailExercise-container">
    <Chart />
    <div className="mouvement-container">
      <h2 className="mouvement-title">Mouvement à reproduire</h2>
      <div className="mouvement-image">
        <img className="image-exercise" src={imageExercise} alt="logo" />
      </div>
      <div className="mouvement-difficulty">
        <span className="difficulte-title">difficulté:</span>
        <span className="star-container">
          <Star className="mouvement-star" />
          <Star className="mouvement-star" />
          <Star className="mouvement-star" />
          <Star className="mouvement-star" />
        </span>
      </div>
    </div>
    <div className="conseil-container">
      <h2 className="conseil-title">Conseils de réalisation</h2>
      <p className="conseil-paragraph">
        On sait depuis longtemps que travailler avec du texte
        lisible et contenant du sens est source de distractions,
        et empêche de se concentrer sur la mise en page elle-même.
        L'avantage du Lorem Ipsum sur un texte générique comme 'Du
        texte. Du texte. Du texte.' est qu'il possède une distribution de
      </p>
    </div>
    <div className="performance-form-container">
      <h2 className="performance-title">Entrer votre nouvelle performance</h2>
      <span className="performance-span">Votre objectif: XX KG</span>
      <form className="performance-formulaire">
        <input className="performance-input" value="10" />
        <button type="submit">ENVOYER</button>
      </form>
    </div>
    <div className="conseil-coach-container">
      <h2 className="conseil-coach-title">Conseils du Coach</h2>
      <span className="conseil-coach-message">salut je suis le message</span>
    </div>
  </div>

);

DetailExercise.propTypes = {

};

export default DetailExercise;
