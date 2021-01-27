import { connect } from 'react-redux';

// on importe le composant de présentation
import HeaderProfil from 'src/components/HeaderProfil';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  data: state.profilPage.data,
  TOKEN: state.loginForm.TOKEN,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = () => ({
  // nom de la prop à remplir: fonction qui dispatch l'action

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(HeaderProfil);
