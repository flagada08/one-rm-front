import React from 'react';
import HeaderProfil from 'src/containers/HeaderProfil';
import Footer from 'src/components/Footer';
import Exercices from 'src/components/Exercices';

import './exerciserecap.scss';

const ExerciseRecap = ({dataExercises}) => (
  <div className="exercicerecap-container">
    <HeaderProfil />
    <div className="exercices-container">
      <div className="exercice-title-container">
        <div className="exercice-title">exercices</div>
        <div className="exercice-title">objectif</div>
        <div className="exercice-title">progression vers objectif</div>
      </div>
      {dataExercises.map((exercise) => (
        <Exercices
          key={exercise.id}
          weight={exercise.weight}
          repetition={exercise.repetition}
          name={exercise.name}
        />
      ))}
    </div>
    <Footer />
  </div>
);

ExerciseRecap.propTypes = {

};

export default ExerciseRecap;
