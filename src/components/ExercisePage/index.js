import React from 'react';
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';

import './exercisepage.scss';

const ExercisePage = () => (
  <div className="main">
    <Header />
    <div className="exercise-container">
      <h2 className="exercise-title">
        ici le titre d'un exercice
      </h2>
      <p className="exercice-text">
        Lorem Elsass ipsum hoplageiss ftomi! schneck gewurztraminer chambon
        purus yeuh. Wurschtsalad quam, sagittis sit turpis réchime vulputate
        eleifend elit amet, sed lotto-owe varius schpeck commodo jetz gehts
        los non barapli Verdammi lacus Coopé de Truchtersheim Christkindelsmärik
      </p>
      <span className="exercice-difficulty">
        ici la difficulté d'un exercice
      </span>
    </div>
    <div className="exercise-container">
      <h2 className="exercise-title">
        ici le titre d'un exercice
      </h2>
      <p className="exercice-text">
        Lorem Elsass ipsum hoplageiss ftomi! schneck gewurztraminer chambon
        purus yeuh. Wurschtsalad quam, sagittis sit turpis réchime vulputate
        eleifend elit amet, sed lotto-owe varius schpeck commodo jetz gehts
        los non barapli Verdammi lacus Coopé de Truchtersheim Christkindelsmärik
      </p>
    </div>
    <div className="exercise-container">
      <h2 className="exercise-title">
        ici le titre d'un exercice
      </h2>
      <p className="exercice-text">
        Lorem Elsass ipsum hoplageiss ftomi! schneck gewurztraminer chambon
        purus yeuh. Wurschtsalad quam, sagittis sit turpis réchime vulputate
        eleifend elit amet, sed lotto-owe varius schpeck commodo jetz gehts
        los non barapli Verdammi lacus Coopé de Truchtersheim Christkindelsmärik
      </p>
    </div>
    <Footer />
  </div>
);

ExercisePage.propTypes = {

};

export default ExercisePage;
