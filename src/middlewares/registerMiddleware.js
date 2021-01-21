import axios from 'axios';

import { SUBMIT_REGISTER } from 'src/actions/formRegister';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_REGISTER: {
      console.log('je suis loginMiddleware, il faut que j\'appelle l\'API');

      const {
        lastname,
        firstname,
        email,
        password,
      } = store.getState().registerForm;
      console.log(email, password, lastname, firstname);

      axios.post('http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/register', {
        // équivalent de email: email avec shorthand property
        lastname,
        firstname,
        email,
        password,
      }).then((response) => {
        console.log(response);
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

export default registerMiddleware;
