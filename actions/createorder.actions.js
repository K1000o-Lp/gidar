import { socket } from '../config';
import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from '../types';

export const createorder = (order = {}) => {
  return (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });

    socket.emit('createOrder', order);

    socket.on('notification', (header, message) => {
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: {
          title: header,
          message,
        }
      });

    });

  }
}