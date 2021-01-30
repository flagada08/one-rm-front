import { connect } from 'react-redux';
import {
  formInputProfilLastname,
  formInputProfilFirstname,
  formInputProfilEmail,
  formInputProfilAge,
  formInputProfilFitnessroom,
} from 'src/actions/formInputProfil';

// on importe le composant de présentation
import ProfilFormPage from 'src/components/ProfilFormPage';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  data: state.profilPage.data,
  lastname: state.profilForm.lastname,
  firstname: state.profilForm.firstname,
  email: state.profilForm.email,
  age: state.profilForm.age,
  fitnessroom: state.profilForm.fitnessroom,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setValueLastname: (newValue) => {
    dispatch(formInputProfilLastname(newValue));
  },
  setValueFirstname: (newValue) => {
    dispatch(formInputProfilFirstname(newValue));
  },
  setValueEmail: (newValue) => {
    dispatch(formInputProfilEmail(newValue));
  },
  setValueAge: (newValue) => {
    dispatch(formInputProfilAge(newValue));
  },
  setValueFitnessRoom: (newValue) => {
    dispatch(formInputProfilFitnessroom(newValue));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ProfilFormPage);
