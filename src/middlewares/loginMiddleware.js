import axios from 'axios';

import { SUBMIT_LOGIN } from 'src/actions/formInputLogin';

const loginMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      console.log('je suis loginMiddleware, il faut que j\'appelle l\'API');

      const { email, password } = store.getState().loginForm;
      console.log(email, password);

      axios.post('http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/register', {
        // équivalent de email: email avec shorthand property
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

export default loginMiddleware;
