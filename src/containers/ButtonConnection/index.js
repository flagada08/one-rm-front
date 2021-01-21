import { connect } from 'react-redux';
import { formConnection } from 'src/actions/formConnection';

// on importe le composant de présentation
import ButtonConnection from 'src/components/ButtonConnection';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = () => ({
  // nom de la prop à remplir: élément à récupérer dans le state

});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  toggleSettingOpen: () => {
    dispatch(formConnection());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ButtonConnection);
