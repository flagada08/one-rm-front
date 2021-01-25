import axios from 'axios';

import { SUBMIT_LOGIN, loggedIn } from 'src/actions/formInputLogin';
import { closeLoginForm } from 'src/actions/formConnection';

const TOKEN = localStorage.getItem('token');
const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      console.log('je suis loginMiddleware, il faut que j\'appelle l\'API');

      const { email, password } = store.getState().loginForm;
      console.log(email, password);

      const API_URL = 'http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/api/login_check';

      axios.post(API_URL, {
        username: email,
        password,
      }, { headers: { Authorization: `Bearer ${TOKEN}` } }).then((response) => {
        console.log(response);
        // je dispatch l'action qui permet la redirection si le membre et dans la base de données
        store.dispatch(loggedIn());
        localStorage.setItem('token', response.data.token);
        // je dispatch l'action qui permet de fermer le formulaire
        store.dispatch(closeLoginForm());
      }).catch((error) => {
        console.log(error);
      });

      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default loginMiddleware;
