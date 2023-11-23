import { socket } from '../config';
import { postLogin } from '../helpers/postLogin';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../types/';

export const login = (username, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    postLogin(username, password)
      .then(([data]) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });

        socket.emit('connection', data);
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAILURE,
          error: 'Usuario y/o contraseña son incorrectos.'
        })
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};
