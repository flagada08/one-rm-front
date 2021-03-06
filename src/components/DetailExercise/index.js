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
  newObjectifRepetition,
  newObjectifWeight,
  addObjectif,
  comfirmMessage,
  comfirmMessageObjectif,
  connectedRole
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
              <span>Entrer vos nouveaux objectifs</span>
              <input onChange={(event) => setNewObjectifRepetition(event.target.value)} className="performance-input" value={newObjectifRepetition} placeholder="Objectif Repetition" />
              <input onChange={(event) => setNewObjectifWeight(event.target.value)} className="performance-input" value={newObjectifWeight} placeholder=" objectif Charge" />
              <button className="send-button" type="button" onClick={() => addObjectif(dataOneExercise.id, dataPerformances[0].user_id) }>ENVOYER</button>
              {comfirmMessageObjectif && <span>{comfirmMessageObjectif}</span>}
            </form>
            <form className="performance-formulaire">
              <span>Entrer vos nouvelles performances</span>
              <input onChange={(event) => setNewRepetition(event.target.value)} className="performance-input" value={newPerf} placeholder="Répétitions" />
              <input onChange={(event) => setNewWeight(event.target.value)} className="performance-input" value={newPerfWeight} placeholder="Charge" />
              <button className="send-button" type="button" onClick={() => addPerf(dataOneExercise.id, dataPerformances[0].user_id)}>ENVOYER</button>
            </form>
            {comfirmMessage && <span>{comfirmMessage}</span>}
          </div>
        </>
        )}
      <form className="conseil-coach-container" onSubmit={handleSubmit}>
        <h2 className="conseil-coach-title">Conseils du Coach</h2>
        {allMessages && allMessages.map((message) => (
          <div key={message.id} className="conseil-coach-message">{message.content}</div>
        ))}
        {connectedRole === 'ROLE_COACH'
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
