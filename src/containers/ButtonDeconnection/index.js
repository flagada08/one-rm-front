import { connect } from 'react-redux';
import { loggedOut } from 'src/actions/formInputLogin';

// on importe le composant de présentation
import ButtonDeconnection from 'src/components/ButtonDeconnection';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = () => ({
  // nom de la prop à remplir: élément à récupérer dans le state

});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  logOut: () => {
    dispatch(loggedOut());
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ButtonDeconnection);
