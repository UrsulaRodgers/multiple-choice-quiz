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
          //this.setState({results: response.data, formSubmitted: true});
        })
        .catch(error => {
          dispatch({type: actionTypes.POST_ERROR, error});
          //alert(error);
        });
	};
}

export const resetPage = () => {
	return{
		type: actionTypes.RESET_PAGE
	}
}

/*export const purchase = (orderData) => {
	return dispatch => {
		dispatch(purchaseStart());
		axios.post('/orders.json', orderData)
			.then(response => {
				console.log(response.data);
				dispatch(orderSuccess(response.data.name, orderData));
			})
			.catch(error => {
				dispatch(orderFail(error));
			});
	};
};*/