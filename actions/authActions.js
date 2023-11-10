import { postLogin } from '../helpers/postLogin';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = (username, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    postLogin(username, password)
      .then(([data]) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAILURE,
          error: 'usuario y/o contraseña son incorrectos.'
        })
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};
