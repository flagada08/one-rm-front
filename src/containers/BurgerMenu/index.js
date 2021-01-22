import { connect } from 'react-redux';
import { openBugerMenu } from 'src/actions/burgerMenu';

// on importe le composant de présentation
import BurgerMenu from 'src/components/BurgerMenu';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  BurgerMenuIsOpen: state.burgerMenu.BurgerMenuIsOpen,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  toggleBurgerMenu: () => {
    dispatch(openBugerMenu());
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);
