import React, { useRef } from 'react';
import Chart from 'src/containers/Chart';
// import imageExercise from '/public/img/exercices/deadlift.jpeg';
import BeautyStars from 'beauty-stars';
import { Send } from 'react-feather';

import './detailexercise.scss';

const DetailExercise = ({
  dataOneExercise,
  setNewRepetition,
  newPerf,
  addPerf,
  setNewWeight,
  newPerfWeight,
  dataPerformances,
  setMessageValue,
  manageSubmit,
  allMessages,
  messageInput,
  dataUser,
  setNewObjectifRepetition,
  setNewObjectifWeight,
  newObecjtifRepetition,
  newObecjtifWeight,
}) => {
  const inputCoach = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit(
      dataPerformances[0].user_id,
      dataOneExercise.id,
    );
    inputCoach.current.value = '';
  };


  return (
    <div className="DetailExercise-container">
      <Chart />
      { dataOneExercise
        && (
        <>

          <div className="mouvement-container">
            <h2 className="mouvement-title">{dataOneExercise.name}</h2>
            <div className="mouvement-image">
              <img className="image-exercise" src={require(`/public/img/exercices/${dataOneExercise.illustration}`).default} alt="logo" />
            </div>
            <div className="mouvement-difficulty">
              <span className="difficulte-title">Difficulté:</span>
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
            <form className="performance-formulaire">
              <span>entrer vos nouvelles objectif</span>
              <input onChange={(event) => setNewObjectifRepetition(event.target.value)} className="performance-input" value={newObecjtifRepetition} placeholder="Objectif Repetition" />
              <input onChange={(event) => setNewObjectifWeight(event.target.value)} className="performance-input" value={newObecjtifWeight} placeholder=" objectif Charge" />
              <button className="send-button" type="button">ENVOYER</button>
            </form>
            <form className="performance-formulaire">
              <span>entrer vos nouvelles performances</span>
              <input onChange={(event) => setNewRepetition(event.target.value)} className="performance-input" value={newPerf} placeholder="Charges" />
              <input onChange={(event) => setNewWeight(event.target.value)} className="performance-input" value={newPerfWeight} placeholder="Répétitions" />
              <button className="send-button" type="button" onClick={() => addPerf(dataOneExercise.id)}>ENVOYER</button>
            </form>
          </div>
        </>
        )}
      <form className="conseil-coach-container" onSubmit={handleSubmit}>
        <h2 className="conseil-coach-title">Conseils du Coach</h2>
        {allMessages && allMessages.map((message) => (
          <div key={message.id} className="conseil-coach-message">{message.content}</div>
        ))}
        {dataUser.roles[0] === 'ROLE_COACH'
          && (
          <div className="conseil-coach-input-container">
            <input ref={inputCoach} className="conseil-coach-input" onChange={(event) => setMessageValue(event.target.value)} value={messageInput} />
            <button type="submit" className="conseil-coach-button-submit">
              <Send size={20} />
            </button>
          </div>
          )}
      </form>
    </div>

  );
};

DetailExercise.propTypes = {

};

export default DetailExercise;
