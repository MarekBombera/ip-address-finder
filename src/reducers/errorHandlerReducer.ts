import { HandleFetchError } from "../actions/";
import {
	FETCH_SEARCHED_ERROR_TRUE,
	FETCH_SEARCHED_ERROR_FALSE,
} from "../actions";

export const errorHandlerReducer = (
	state: boolean = false,
	action: HandleFetchError
) => {
	switch (action.type) {
		case FETCH_SEARCHED_ERROR_FALSE:
			return action.payload;
		case FETCH_SEARCHED_ERROR_TRUE:
			return action.payload;

		default:
			return state;
	}
};
