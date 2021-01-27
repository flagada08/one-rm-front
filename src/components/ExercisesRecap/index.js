import React from 'react';
import HeaderProfil from 'src/containers/HeaderProfil';
import Footer from 'src/components/Footer';
import Exercices from 'src/components/Exercices';

import './exerciserecap.scss';
import { PropTypes } from 'prop-types';

const ExerciseRecap = ({ dataExercises }) => (
  <div className="exercicerecap-container">
    <HeaderProfil />
    <div className="exercices-container">
      <div className="exercice-title-container">
        <div className="exercice-title">exercices</div>
        <div className="exercice-title">objectif</div>
        <div className="exercice-title">progression vers objectif</div>
      </div>
      {console.log(dataExercises)
      }
      {dataExercises.map((exercise) => (

        <Exercices
        // ! attention à changer !!
          key={Math.floor(Math.random() * Math.floor(1000))}
          name={exercise.exercise.name}
          weight={exercise.weight}
          repetition={exercise.repetition}
        />
      ))}
    </div>
    <Footer />
  </div>
);

// ExerciseRecap.propTypes = {
//   dataExercises: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       repetition: PropTypes.num,
//       weight: PropTypes.num,
//     }).isRequired,
//   ),
// };

// ExerciseRecap.defaultProps = {
//   dataExercises: {},

// };

export default ExerciseRecap;
