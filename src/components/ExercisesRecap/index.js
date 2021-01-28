import React from 'react';
import HeaderProfil from 'src/containers/HeaderProfil';
import Footer from 'src/components/Footer';
import Exercices from 'src/components/Exercices';

import './exerciserecap.scss';
import { PropTypes } from 'prop-types';

const ExerciseRecap = ({ dataExercises, dataPerformances }) => (
  <div className="exercicerecap-container">
    <HeaderProfil />
    <div className="exercices-container">
      <div className="exercice-title-container">
        <div className="exercice-title">exercices</div>
        <div className="exercice-title">objectif</div>
        <div className="exercice-title">progression vers objectif</div>
      </div>
      {console.log(dataExercises)}
      {dataExercises && dataExercises.map((exercise) => (
        dataPerformances.map((performance) => {
          console.log(exercise);
        })
        // <Exercices
        //   key={performance.exercise.id}
        //   name={exercise.name}
        //   weight={performance.weight}
        //   repetition={performance.repetition}
        // />

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
