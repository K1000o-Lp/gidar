import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE } from '../types';

const initialState = {
  loading: false,
  success: null,
  error: null,
}

export const createorderReducer = (state = initialState, action) => {

  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
        error: null,
      }

    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: null,
      }

    default:
      return state;
  }
}