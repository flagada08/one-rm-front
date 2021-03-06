import React from 'react';
import ProgressBar from 'src/components/ProgressBar';
import { Link } from 'react-router-dom';

import './exercises.scss';

const Exercise = ({
  name,
  weight,
  repetition,
  id,
  clickOfExercise,
  goalWeight,
  goalRepetition,
  userId,
}) => {
  const progressWeight = Math.floor((weight / goalWeight) * 100);

  const progressWeightCalculed = progressWeight > 100 ? 100 : progressWeight;

  const progressRepetition = Math.floor((repetition / goalRepetition) * 100);

  const progressRepetitionCalculed = progressRepetition > 100 ? 100 : progressRepetition;

  return (
    <div className="exercices-cards">
      <div className="exercice-card">
        <Link
          onClick={(e) => clickOfExercise(e.target.dataset.id, userId)}
          className="exercice-link"
          to="/detailexercice"
          data-id={id}
        >{name}
        </Link>
        <div className="exercice-pregression-container">
          <div className="exercice-progress-weight">
            <span className="exercice-objectif-weight">Votre obecjtif est de {goalWeight} KG</span>
            <ProgressBar progress={isNaN(progressWeightCalculed) ? 0 : progressWeightCalculed} />
          </div>
          <div className="exercice-progress-repetition">
            <span className="exercice-objectif-repetition">Votre obecjtif est de {goalRepetition} REP</span>
            <ProgressBar
              progress={isNaN(progressRepetitionCalculed)
                ? 0
                : progressRepetitionCalculed}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Exercise.propTypes = {

};

export default Exercise;
