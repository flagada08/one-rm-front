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
        confirmPassword,
      } = store.getState().registerForm;

      console.log(
        lastname,
        firstname,
        email,
      );

      axios.post('http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/register',
        {
          lastname,
          firstname,
          email,
          password,
          confirmPassword,
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
