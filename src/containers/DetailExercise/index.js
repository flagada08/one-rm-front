import { connect } from 'react-redux';
import {
  addNewPerf,
  postNewPerf,
  addNewPerfWeight,
  setMessageValue,
  addMessage,
} from 'src/actions/detailExercise';

// on importe le composant de présentation
import detailExercise from 'src/components/DetailExercise';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  dataOneExercise: state.detailExercise.detailExercise,
  newPerf: state.detailExercise.newPerf,
  newPerfWeight: state.detailExercise.newPerfWeight,
  dataPerformances: state.profilPage.dataPerformances,
  allMessages: state.detailExercise.allMessages,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setNewRepetition: (newPerf) => {
    dispatch(addNewPerf(newPerf));
  },

  addPerf: (exerciseId) => {
    dispatch(postNewPerf(exerciseId));
  },

  setNewWeight: (newPerfWeight) => {
    dispatch(addNewPerfWeight(newPerfWeight));
  },

  setMessageValue: (newMessage) => {
    dispatch(setMessageValue(newMessage));
  },

  manageSubmit: (userId, exerciseId) => {
    dispatch(addMessage(userId, exerciseId));
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(detailExercise);
