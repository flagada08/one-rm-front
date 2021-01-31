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
      <div className="main-section-top">
        <h2 className="main-section-title">Bref récap du site O'ne RM</h2>
        <p>
          Lorem Elsass ipsum hoplageiss ftomi! schneck gewurztraminer chambon
          purus yeuh. Wurschtsalad quam, sagittis sit turpis réchime vulputate
          eleifend elit amet, sed lotto-owe varius schpeck commodo jetz gehts
          los non barapli Verdammi lacus Coopé de Truchtersheim Christkindelsmärik
        </p>
      </div>
      <div className="main-mid-video">
        <div className="main-section-mid">
          <h2 className="main-section-title">Challenge ton coach !</h2>
          <img className="challenge-image" src={challengeImage} alt="challengeImage" />
        </div>
        <div className="main-video-section">
          <h2 className="main-section-title">MEDIA</h2>
          <iframe
            title="video"
            src="https://www.youtube.com/embed/7PgQXWrPC6E"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  </main>
);

export default Main;
