import * as actionTypes from '../actions/actionTypes';

const initialState = {
	results: [],
	formSubmitted: false,
	error:null
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.POST_START:
			return {
				...state,
				formSubmitted:true
			}
		case actionTypes.GET_RESULTS:
			return {
				...state,
				results: action.response.data
			};
		case actionTypes.POST_ERROR:
			return {
				...state,
				error: action.error
			};
		case actionTypes.RESET_PAGE:
			return {
				...state,
				formSubmitted: false,
				results: []
			}
		default:
			return state
	}
}

export default reducer;