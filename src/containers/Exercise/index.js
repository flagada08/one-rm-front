import { connect } from 'react-redux';
import { clickOfOneExercise, fetchAllGoals } from 'src/actions/detailExercise';
// on importe le composant de présentation
import Exercise from 'src/components/Exercices';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = () => ({
  // nom de la prop à remplir: élément à récupérer dans le state

});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  clickOfExercise: (exerciseId) => {
    dispatch(clickOfOneExercise(exerciseId));
    dispatch(fetchAllGoals(exerciseId));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Exercise);
