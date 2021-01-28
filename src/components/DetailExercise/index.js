import React from 'react';
import Chart from 'src/components/Chart';
import imageExercise from '/public/img/deadlift.jpeg';
import { Star } from 'react-feather';

import './detailexercise.scss';

const DetailExercise = ({ dataOneExercise, setNexPerf, newPerf, addPerf }) => (
  <div className="DetailExercise-container">
    {console.log(dataOneExercise)}
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
          <input onChange={setNexPerf((event) => event.target.value)} className="performance-input" value={newPerf} />
          <button type="submit" onClick={addPerf(dataOneExercise[0].exercise.id)}>ENVOYER</button>
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
