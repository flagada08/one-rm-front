import React from 'react';
import Chart from 'src/components/Chart';
import imageExercise from '/public/img/deadlift.jpeg';
import { Star } from 'react-feather';

import './detailexercise.scss';

const DetailExercise = ({
  dataOneExercise,
  setNewRepetition,
  newPerf,
  addPerf,
  setNewWeight,
  newPerfWeight,
}) => (
  <div className="DetailExercise-container">
    {console.log(dataOneExercise[0])}
    <Chart />
    { dataOneExercise
      && (
      <>

        <div className="mouvement-container">
          <h2 className="mouvement-title">{dataOneExercise[0].exercise.name}</h2>
          <div className="mouvement-image">
            <img className="image-exercise" src={imageExercise} alt="logo" />
          </div>
          <div className="mouvement-difficulty">
            <span className="difficulte-title">difficulté:</span>
            <span className="star-container">
              <Star className="mouvement-star" />
              <Star className="mouvement-star" />
              <Star className="mouvement-star" />
              <Star className="mouvement-star" />
            </span>
          </div>
        </div>
        <div className="conseil-container">
          <h2 className="conseil-title">Conseils de réalisation</h2>
          <p className="conseil-paragraph">{dataOneExercise[0].exercise.advice}</p>
        </div>
        <div className="performance-form-container">
          <h2 className="performance-title">Entrer votre nouvelle performance</h2>
          <span className="performance-span">Votre objectif: XX KG</span>
          <form className="performance-formulaire">
            <input onChange={(event) => setNewRepetition(event.target.value)} className="performance-input" value={dataOneExercise[0].repetition} placeholder="nouvelle perf pour la repetition" />
            <button type="button" onClick={() => addPerf(dataOneExercise[0].exercise.id)}>ENVOYER</button>
            <input onChange={(event) => setNewWeight(event.target.value)} className="performance-input" value={dataOneExercise[0].weight} placeholder="nouvelle perf pour le poid" />
            <button type="button" onClick={() => addPerf(dataOneExercise[0].exercise.id)}>ENVOYER</button>
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
