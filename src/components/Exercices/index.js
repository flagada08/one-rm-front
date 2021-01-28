import React from 'react';
import ProgressBar from 'src/components/ProgressBar';
import { Link } from 'react-router-dom';

const Exercise = ({
  name, weight, repetition, id, clickOfExercise,
}) => (
  <div className="exercice-card">
    {console.log(id)}
    <Link
      onClick={(e) => clickOfExercise(e.target.dataset.id)}
      className="ecercice-link"
      to="/detailexercice"
      data-id={id}
    >{name}
    </Link>
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
