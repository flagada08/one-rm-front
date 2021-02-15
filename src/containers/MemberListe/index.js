import { connect } from 'react-redux';
import { clickOfMember, clickDeleteMember, changeMemberRank } from 'src/actions/pageProfil';
// on importe le composant de présentation
import MemberListe from 'src/components/MemberListe';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  data: state.profilPage.data,
  connectedRole: state.profilPage.role,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  clickOfMember: (id) => {
    dispatch(clickOfMember(id));
  },
  clickDeleteMember: (id) => {
    dispatch(clickDeleteMember(id));
  },

  changeMemberRank: (id, newRole) => {
    dispatch(changeMemberRank(id, newRole));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(MemberListe);
