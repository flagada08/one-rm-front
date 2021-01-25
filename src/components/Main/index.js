import React from 'react';
import image from '/public/img/img-test.jpg';
import challengeImage from '/public/img/challenge-image.png';
import './main.scss';

const Main = () => (
  <main className="Main">
    <div className="main-image-container">
      <h1 className="main-title">Bienvenue sur O'ne RM</h1>
      <img className="main-image" src={image} alt="slider" />
    </div>
    <section className="main-section-container">
      <div className="main-section">
        <h2 className="main-section-title">Challenge</h2>
        <p>
          Lorem Elsass ipsum hoplageiss ftomi! schneck gewurztraminer chambon
          purus yeuh. Wurschtsalad quam, sagittis sit turpis réchime vulputate
          eleifend elit amet, sed lotto-owe varius schpeck commodo jetz gehts
          los non barapli Verdammi lacus Coopé de Truchtersheim Christkindelsmärik
        </p>
      </div>
      <div className="main-section">
        <h2 className="main-section-title">Challenge</h2>
        <img className="challenge-image" src={challengeImage} alt="challengeImage" />
      </div>
      <div className="main-section">
        <h2 className="main-section-title">Challenge</h2>
        <iframe
          title="video"
          src="https://www.youtube.com/embed/7PgQXWrPC6E"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  </main>
);

export default Main;
