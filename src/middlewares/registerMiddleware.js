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

      axios.post('http://ec2-54-226-80-94.compute-1.amazonaws.com/O-ne-RM/O-NE-RM/public/register', {
        // équivalent de email: email avec shorthand property

        gender: 'femme',
        firstname: 'raph',
        lastname: 'raph',
        age: 25,
        email: 'raph@oclock.io',
        role: 'Gérant',
        password: 'raph',
        fitnessRoom: 3,

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
