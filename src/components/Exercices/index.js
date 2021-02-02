import React from 'react';
import ProgressBar from 'src/components/ProgressBar';
import { Link } from 'react-router-dom';

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
    <div className="exercice-card">
      <Link
        onClick={(e) => clickOfExercise(e.target.dataset.id, userId)}
        className="ecercice-link"
        to="/detailexercice"
        data-id={id}
      >{name}
      </Link>
      <div className="exercice-objectif">
        {weight} KG / {repetition} REP
      </div>
      <div className="exercice-pregression">
        <ProgressBar progress={progressWeightCalculed} />
        <ProgressBar progress={progressRepetitionCalculed} />
      </div>
    </div>
  );
}

Exercise.propTypes = {

};

export default Exercise;
