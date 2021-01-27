import React from 'react';
import ProgressBar from 'src/components/ProgressBar';
import { Link } from 'react-router-dom';

const Exercise = (weight, repetition, name) => (
  <div className="exercice-card">
    <Link className="ecercice-link" to="/">{name}</Link>
    <div className="exercice-objectif">
      {weight} KG / {repetition} REP
    </div>
    <div className="exercice-pregression">
      <ProgressBar />
    </div>
  </div>

);

Exercise.propTypes = {

};

export default Exercise;
