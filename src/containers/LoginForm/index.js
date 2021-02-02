import { connect } from 'react-redux';
import { formRegister, fetchRegisterData } from 'src/actions/formRegister';
import { formLoginInputEmail, formLoginInputPassword, submitLogin } from 'src/actions/formInputLogin';

// on importe le composant de présentation
import LoginForm from 'src/components/LoginForm';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  isOpen: state.header.OpenREgister,
  email: state.loginForm.email,
  password: state.loginForm.password,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  OpenRegisterForm: () => {
    dispatch(formRegister());
    dispatch(fetchRegisterData());
  },

  setValueEmail: (newValue) => {
    dispatch(formLoginInputEmail(newValue));
  },

  setValuePassword: (newValue) => {
    dispatch(formLoginInputPassword(newValue));
  },

  submitLogIn: () => {
    dispatch(submitLogin());
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
