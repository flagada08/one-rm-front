import { connect } from 'react-redux';
import { clickOfOneExercise } from 'src/actions/detailExercise';
// on importe le composant de présentation
import ExercisesRecap from 'src/components/ExercisesRecap';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  dataExercises: state.profilPage.dataExercises,
  dataPerformances: state.profilPage.dataPerformances,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  clickOfExercise: () => {
    dispatch(clickOfOneExercise());
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ExercisesRecap);
