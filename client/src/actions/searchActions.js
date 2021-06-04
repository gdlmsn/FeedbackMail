
import {
  GET_SINGLE_QUOTE_REQUEST,
  GET_SINGLE_QUOTE_SUCCESS,
  GET_SINGLE_QUOTE_FAILURE,
} from './types';

export const getSingleQuote = async (dispatch) =>{
    dispatch(getSingleQuoteRequest());
    try{
        const response = await api.get('/')
    }catch(error){
        dispatch(getSingleQuoteFailure(error));
    }
}

function getSingleQuoteRequest(){
    return{ type: GET_SINGLE_QUOTE_REQUEST}
}

function getSingleQuoteSuccess(response){
    return{ type: GET_SINGLE_QUOTE_SUCCESS, payload:response.data}
}

function getSingleQuoteFailure(error){
    return{ type: GET_SINGLE_QUOTE_FAILURE, error}
}