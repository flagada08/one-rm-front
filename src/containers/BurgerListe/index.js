import { connect } from 'react-redux';
import { openBugerMenu } from 'src/actions/burgerMenu';
import { formConnection } from 'src/actions/formConnection';
import { loggedOut } from 'src/actions/formInputLogin';
import { clickOfRecapExercise } from 'src/actions/recapExercise';
import { allMembers } from 'src/actions/pageProfil';

// on importe le composant de présentation
import BurgerListe from 'src/components/BurgerListe';

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
  toggleBurgerMenu: () => {
    dispatch(openBugerMenu());
    dispatch(clickOfRecapExercise());
    dispatch(allMembers());
  },

  buttonConnect: () => {
    dispatch(openBugerMenu());
    dispatch(formConnection());
  },

  buttonDisconnect: () => {
    dispatch(loggedOut());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(BurgerListe);
