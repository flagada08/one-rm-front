import React from 'react';
import HeaderProfil from 'src/containers/HeaderProfil';
import Footer from 'src/components/Footer';
import Exercices from 'src/containers/Exercise';

import './exerciserecap.scss';
import { PropTypes } from 'prop-types';

const ExerciseRecap = ({ dataPerformances }) => (
  <div className="exercicerecap-container">
    <HeaderProfil />
    <div className="exercices-container">
      <div className="exercice-title-container">
        <div className="exercice-title">éxercices</div>
        <div className="exercice-title">progression vers objectif</div>
      </div>
      {dataPerformances && dataPerformances.map((exercise) => (

        <Exercices
          key={exercise.ID_exercise}
          id={exercise.ID_exercise}
          name={exercise.name}
          userId={exercise.user_id}
          weight={exercise.progress_weight === null ? 0 : Number(exercise.progress_weight)}
          repetition={exercise.progress_repetition === null
            ? 0
            : Number(exercise.progress_repetition)}
          goalWeight={exercise.goal_weight === null ? 0 : Number(exercise.goal_weight)}
          goalRepetition={exercise.goal_repetition === null ? 0 : Number(exercise.goal_repetition)}
        />

      ))}

    </div>
    <Footer />
  </div>
);

// ExerciseRecap.propTypes = {
//   dataExercises: PropTypes.array,
// };

// ExerciseRecap.defaultProps = {
//   dataExercises: [],
// };

export default ExerciseRecap;
