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
        <div className="exercice-title">exercices</div>
        <div className="exercice-title">objectif</div>
        <div className="exercice-title">progression vers objectif</div>
      </div>
      {console.log(dataPerformances)}
      {dataPerformances && dataPerformances.map((exercise) => (

        <Exercices
          key={exercise.ID_exercise}
          id={exercise.ID_exercise}
          name={exercise.name}
          weight={exercise.weight === null ? 0 : exercise.weight}
          repetition={exercise.repetition === null ? 0 : exercise.repetition}
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
