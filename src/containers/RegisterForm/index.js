import { connect } from 'react-redux';
import {
  closeFormRegister,
  formRegisterInputLastname,
  formRegisterInputFirstname,
  formRegisterInputEmail,
  formRegisterInputPassword,
  formRegisterInputConfirmPassword,
  formRegisterInputGender,
  formRegisterInputAge,
  formRegisterInputRole,
  formRegisterInputFitnessRoom,
  submitRegister,
  formRegisterInputBoxPassword,
} from 'src/actions/formRegister';

// on importe le composant de présentation
import RegisterForm from 'src/components/RegisterForm';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  OpenREgister: state.header.OpenREgister,
  firstname: state.registerForm.firstname,
  lastname: state.registerForm.lastname,
  email: state.registerForm.email,
  password: state.registerForm.password,
  confirmPassword: state.registerForm.confirmPassword,
  gender: state.registerForm.gender,
  age: state.registerForm.age,
  role: state.registerForm.role,
  fitnessRoom: state.registerForm.fitnessRoom,
  boxPassword: state.registerForm.boxPassword,
  allFitnessRoom: state.registerForm.allFitnessRoom,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  CloseRegisterForm: () => {
    dispatch(closeFormRegister());
  },
  setValueLastname: (newValue) => {
    dispatch(formRegisterInputLastname(newValue));
  },
  setValueFirstname: (newValue) => {
    dispatch(formRegisterInputFirstname(newValue));
  },
  setValueEmail: (newValue) => {
    dispatch(formRegisterInputEmail(newValue));
  },
  setValuePassword: (newValue) => {
    dispatch(formRegisterInputPassword(newValue));
  },
  setValueConfirmPassword: (newValue) => {
    dispatch(formRegisterInputConfirmPassword(newValue));
  },
  setValueGender: (newValue) => {
    dispatch(formRegisterInputGender(newValue));
  },
  setValueAge: (newValue) => {
    dispatch(formRegisterInputAge(newValue));
  },
  setValueRole: (newValue) => {
    dispatch(formRegisterInputRole(newValue));
  },
  setValueFitnessRoom: (newValue) => {
    dispatch(formRegisterInputFitnessRoom(newValue));
  },
  OnSubmitRegister: () => {
    dispatch(submitRegister());
  },
  setValueBoxPassword: (newValue) => {
    dispatch(formRegisterInputBoxPassword(newValue));
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
