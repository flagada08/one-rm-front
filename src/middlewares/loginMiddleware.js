import axios from 'axios';

import {
  SUBMIT_LOGIN, loggedIn, redirect, LengthPasswordMessage,
} from 'src/actions/formInputLogin';
import { closeLoginForm } from 'src/actions/formConnection';

const TOKEN = localStorage.getItem('token');
const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().loginForm;
      console.log(store.getState().loginForm.loggedIn);

      const API_URL = 'http://54.226.80.94/O-ne-RM/O-NE-RM/public/api/login_check';
      if (password.length > 5) {
        axios.post(API_URL, {
          username: email,
          password,
        }, { headers: { Authorization: `Bearer ${TOKEN}` } })
          .then((response) => {
            console.log(response);
            // je dispatch l'action qui permet la redirection si le membre et dans la base de données
            localStorage.setItem('token', response.data.token);
            store.dispatch(loggedIn());
            store.dispatch(redirect());
            store.dispatch(redirect());
            // je dispatch l'action qui permet de fermer le formulaire
            store.dispatch(closeLoginForm());
          }).catch((error) => {
            console.log(error);
          });
      }
      else {
        store.dispatch(LengthPasswordMessage());
      }
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default loginMiddleware;
