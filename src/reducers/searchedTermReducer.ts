import { SearchedTerm } from "../actions/index";
import { SEARCHED_TERM } from "../actions/types";

export const searchedTermReducer = (
	state: string = "",
	action: SearchedTerm
) => {
	switch (action.type) {
		case SEARCHED_TERM:
			return action.payload;

		default:
			return state;
	}
};
