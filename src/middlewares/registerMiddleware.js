import axios from 'axios';

import { SUBMIT_REGISTER, FETCH_REGISTER_DATA, allFitnessRoom } from 'src/actions/formRegister';

const registerMiddleware = (store) => (next) => (action) => {
  const fetchRegisterData = () => {
    const API_URL = 'http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/getFitnessRoomList';
    axios.get(API_URL)
      .then((response) => {
        const { data } = response;
        store.dispatch(allFitnessRoom(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  switch (action.type) {
    case FETCH_REGISTER_DATA: {
      fetchRegisterData();
      next(action);
      break;
    }
    case SUBMIT_REGISTER: {
      console.log('je suis loginMiddleware, il faut que j\'appelle l\'API');

      const {
        lastname,
        firstname,
        email,
        gender,
        age,
        password,
        boxPassword,
        fitnessRoom,
        confirmPassword,
      } = store.getState().registerForm;
      const ageConvertToNumber = Number(age);
      const fitnessRoomConvertToNumber = Number(fitnessRoom);
      console.log(fitnessRoomConvertToNumber);
      
      if (password === confirmPassword) {
        axios.post('http://charlie-bauduin.vpnuser.lan/Apotheose/O-ne-RM/O-NE-RM/public/register',
          {
            gender,
            firstname,
            lastname,
            age: ageConvertToNumber,
            email,
            password,
            fitnessRoom: fitnessRoomConvertToNumber,
            fitnessRoom_Password: boxPassword,
          }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        });
      }
      else {
        alert('pas match');
      }

      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default registerMiddleware;
