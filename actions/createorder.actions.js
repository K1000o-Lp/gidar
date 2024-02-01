import { socket } from '../config';
import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from '../types';

export const createorder = (order = {}) => {
  return (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });

    socket.emit('createOrder', order);

    socket.on('generatedCase', ([order]) => {
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: {
          title: 'Caso notificado a OATI',
          message: 'Será atendido en la brevedad posible.',
        }
      });

    });

  }
}