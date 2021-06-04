import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from '../actions/types';

const initialState = {
  isLoading: false,
  loaded: false,
  payload: null,
  error: null,
};

export function authReducer(state = initialState, action) {
  console.log("auth reducer", action);
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading:false,
        loaded:true,
        user: action.payload
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
