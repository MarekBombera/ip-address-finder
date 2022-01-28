import { FetchSearchedAction } from "../actions/index";
import { FETCH_SEARCHED_IP, FETCH_CLIENT_IP } from "../actions/types";

export const fetchSearchedReducer = (
	state: any = null,
	action: FetchSearchedAction
) => {
	switch (action.type) {
		case FETCH_SEARCHED_IP:
			return action.payload;
		case FETCH_CLIENT_IP:
			return action.payload;

		default:
			return state;
	}
};
