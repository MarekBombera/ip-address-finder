import { FetchClientIP } from "../actions/index";
import { FETCH_CLIENT_IP } from "../actions";

export const fetchClientReducer = (
	state: any = null,
	action: FetchClientIP
) => {
	switch (action.type) {
		case FETCH_CLIENT_IP:
			return action.payload;

		default:
			return state;
	}
};
