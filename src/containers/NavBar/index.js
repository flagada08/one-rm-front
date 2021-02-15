import { connect } from 'react-redux';
import { clickOfRecapExercise, clickOfExercisesPage } from 'src/actions/recapExercise';

// on importe le composant de présentation
import NavBar from 'src/components/NavBar';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  TOKEN: state.loginForm.TOKEN,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  clickOfRecapExercise: () => {
    dispatch(clickOfRecapExercise());
  },
  clickOfExercisesPage: () => {
    dispatch(clickOfExercisesPage());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
