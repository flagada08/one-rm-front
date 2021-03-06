import React from 'react';
import Footer from 'src/components/Footer';

import './exercisespage.scss';

const ExercisesPage = ({ exercisesData }) => (
  <div className="main-exercises-page">
    {exercisesData && exercisesData.map((exercise) => (

      <div key={exercise.id} className="exercise-container">
        <div className="left-section">
          <h2 className="exercise-title">
            {exercise.name}
          </h2>
          <div className="exercise-media">
            <img src={require(`/public/img/smallExercises/${exercise.illustration}`).default} alt="logo" />
            <span className="exercise-difficulty">
              Niveau de difficultÃ©: {exercise.difficulty}/5
            </span>
          </div>
        </div>
        <div className="exercise-border" />
        <p className="exercise-text">
          {exercise.advice}
        </p>
      </div>

    ))}
    <Footer />
  </div>
);

ExercisesPage.propTypes = {

};

export default ExercisesPage;
