import React from 'react';
import HeaderProfil from 'src/containers/HeaderProfil';
import Footer from 'src/components/Footer';
import Exercices from 'src/containers/Exercise';

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
      {console.log(dataPerformances)}
      {dataExercises && dataExercises.map((exercise) => (
        dataPerformances.map((performance) => {
          if (exercise.id === performance.exercise.id) {
            return (
              <Exercices
                key={exercise.id}
                id={exercise.id}
                name={exercise.name}
                weight={performance.weight}
                repetition={performance.repetition}
              />
            );
          }
          // return (
          //   <Exercices
          //     key={exercise.id}
          //     name={exercise.name}
          //     weight={0}
          //     repetition={0}
          //   />
          // );
        })
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
