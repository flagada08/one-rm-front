import React from 'react';
import image from '/public/img/img-test.jpg';
import './main.scss';

const Main = () => (
  <div className="Main">
    <div className="welcome-slider">
      <h1 className="welcome">Bienvenue sur O'ne RM</h1>
      <img className="slider" src={image} alt="slider" />
      <article className="main-article">
        <div className="main-challenges">
          <h2 className="title-challenges">Challenges</h2>
          <p>
            Lorem Elsass ipsum hoplageiss ftomi! schneck gewurztraminer chambon
            purus yeuh. Wurschtsalad quam, sagittis sit turpis réchime vulputate
            eleifend elit amet, sed lotto-owe varius schpeck commodo jetz gehts
            los non barapli Verdammi lacus Coopé de Truchtersheim Christkindelsmärik
          </p>
          <button>LIRE PLUS | S'ENREGISTRER</button>
        </div>
        <div className="main-workout-date">
          <h2 className="workout-date">Date de Workout</h2>
          <button>&#60;</button>
          <button>&#62;</button>
        </div>
        <div>
          <h3 className="workout-day">Workout du jour</h3>
          <p>
            Lorem Elsass ipsum hoplageiss ftomi! schneck gewurztraminer chambon
            purus yeuh. Wurschtsalad quam, sagittis sit turpis réchime vulputate
            eleifend elit amet,
          </p>
        </div>
        <div>
          <h3 className="title-challenge">Titre du challenge</h3>
          <p>
            Lorem Elsass ipsum hoplageiss ftomi! schneck gewurztraminer chambon purus yeuh.
            Wurschtsalad quam, sagittis sit turpis réchime vulputate eleifend elit amet,
          </p>
        </div>
      </article>
    </div>
  </div>
);

export default Main;
