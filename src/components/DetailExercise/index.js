import React from 'react';
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
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    manageSubmit(
      dataPerformances[0].user_id,
      dataOneExercise.id,
    );
    console.log('je passe par handlesubmit pour les messages ');
  };

  return (
    <div className="DetailExercise-container">
      <Chart ExerciceName={dataOneExercise.name} />
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
            <h2 className="performance-title">Entrer votre nouvelle performance</h2>
            {dataPerformances.map((goal) => (
              Number(goal.ID_exercise) === dataOneExercise.id
                ? (
                  <div className="performance-goals" key={goal.ID_exercise}>
                    <span className="performance-span">Votre objectif répétitons: {goal.goal_repetition} REP</span>
                    <span className="performance-span">Votre objectif poids: {goal.goal_weight} KG</span>
                  </div>
                )
                : ''

            ))}

            <form className="performance-formulaire">

              <input onChange={(event) => setNewRepetition(event.target.value)} className="performance-input" value={newPerf} placeholder="Charges" />
              <input onChange={(event) => setNewWeight(event.target.value)} className="performance-input" value={newPerfWeight} placeholder="Répétitions" />
              <button className="send-button" type="button" onClick={() => addPerf(dataOneExercise.id)}>ENVOYER</button>
            </form>
          </div>
        </>
        )}
      <form className="conseil-coach-container" onSubmit={handleSubmit}>
        <h2 className="conseil-coach-title">Conseils du Coach</h2>
        {allMessages.map((message) => (
          <div key={message.id} className="conseil-coach-message">{message.content}</div>
        ))}
        {dataUser.roles[0] === 'ROLE_COACH'
          && (
          <div className="conseil-coach-input-container">
            <input className="conseil-coach-input" onChange={(event) => setMessageValue(event.target.value)} value={messageInput} />
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
