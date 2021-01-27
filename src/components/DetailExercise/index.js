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
  </div>

);

DetailExercise.propTypes = {

};

export default DetailExercise;
