import React from 'react';
import Chart from 'src/components/Chart';
import imageExercise from '/public/img/exercices/deadlift.jpeg';
import BeautyStars from 'beauty-stars';

import './detailexercise.scss';

const DetailExercise = ({
  dataOneExercise,
  setNewRepetition,
  newPerf,
  addPerf,
  setNewWeight,
  newPerfWeight,
  dataPerformances,
}) => (
  <div className="DetailExercise-container">
    {console.log(dataPerformances)}
    <Chart ExerciceName={dataOneExercise.name} />
    { dataOneExercise
      && (
      <>

        <div className="mouvement-container">
          <h2 className="mouvement-title">{dataOneExercise.name}</h2>
          <div className="mouvement-image">
            <img className="image-exercise" src={imageExercise} alt="logo" />
          </div>
          <div className="mouvement-difficulty">
            <span className="difficulte-title">difficulté:</span>
            <span className="star-container">
              <BeautyStars
                size="10px"
                gap="5px"
                value={dataOneExercise.difficulty}
                color="#FF0000"
                inactiveColor=""
              />
            </span>
          </div>
        </div>
        <div className="conseil-container">
          <h2 className="conseil-title">Conseils de réalisation</h2>
          <p className="conseil-paragraph">{dataOneExercise.advice}</p>
        </div>
        <div className="performance-form-container">
          <h2 className="performance-title">Entrer votre nouvelle performance</h2>
          {dataPerformances.map((goal) => (
            Number(goal.ID_exercise) === dataOneExercise.id
              ? (
                <div key={goal.ID_exercise}>
                  <span className="performance-span">Votre objectif répétiton: {goal.goal_repetition} KG</span>
                  <span className="performance-span">Votre objectif poids: {goal.goal_weight} KG</span>
                </div>
              )
              : ''

          ))}

          <form className="performance-formulaire">
            <input onChange={(event) => setNewRepetition(event.target.value)} className="performance-input" value={newPerf} placeholder="nouvelle perf pour la repetition" />
            <button type="button" onClick={() => addPerf(dataOneExercise.id)}>ENVOYER</button>
            <input onChange={(event) => setNewWeight(event.target.value)} className="performance-input" value={newPerfWeight} placeholder="nouvelle perf pour le poid" />
            <button type="button" onClick={() => addPerf(dataOneExercise.id)}>ENVOYER</button>
          </form>
        </div>
      </>
      )}
    <div className="conseil-coach-container">
      <h2 className="conseil-coach-title">Conseils du Coach</h2>
      <div className="conseil-coach-message">salut je suis le message</div>
      <div className="conseil-coach-message">salut je suis le message</div>
      <div className="conseil-coach-message">salut je suis le message</div>
    </div>
  </div>

);

DetailExercise.propTypes = {

};

export default DetailExercise;
