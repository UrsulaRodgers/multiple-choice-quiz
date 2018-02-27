import * as actionTypes from './actionTypes';
import axios from 'axios';

export const postStart = () => {
	return {
		type: actionTypes.POST_START
	};
}

export const returnResults = (values) => {
	return dispatch => {
		dispatch(postStart());
		axios.post('http://localhost:3001/users', {answers: values})
        .then(response => {
          dispatch({type: actionTypes.GET_RESULTS, response});
        })
        .catch(error => {
          dispatch({type: actionTypes.POST_ERROR, error});
        });
	};
}

export const resetPage = () => {
	return{
		type: actionTypes.RESET_PAGE
	}
}