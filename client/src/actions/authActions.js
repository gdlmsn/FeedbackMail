import axios from 'axios';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
} from './types';

export const fetchUser = () => async (dispatch) => {
  dispatch(fetchUserRequest());
  try {
    const response = await axios.get('/api/current_user');
    dispatch(fetchUserSuccess(response));
  } catch (error) {
    dispatch(fetchUserFailure(error));
  }
};

function fetchUserRequest() {
  return { type: FETCH_USER_REQUEST };
}

function fetchUserSuccess(response) {
  return { type: FETCH_USER_SUCCESS, payload: response.data };
}

function fetchUserFailure(error) {
  return { type: FETCH_USER_FAILURE, error };
}

export const logoutUser = () =>async (dispatch) =>{
  dispatch(logoutUserRequest());
  try {
    const response = await axios.get('/api/logout');
    dispatch(logoutUserSuccess(response));
  } catch (error) {
    dispatch(logoutUserFailure(error));
  }
}

function logoutUserRequest() {
  return { type: LOGOUT_USER_REQUEST };
}

function logoutUserSuccess(response) {
  return { type: LOGOUT_USER_SUCCESS, payload: response.data };
}

function logoutUserFailure(error) {
  return { type: LOGOUT_USER_FAILURE, error };
}

