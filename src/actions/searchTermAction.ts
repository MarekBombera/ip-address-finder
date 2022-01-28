import { SEARCHED_TERM } from "./types";

export interface SearchedTerm {
	type: string;
	payload: string;
}

export const searchedTerm = (term: string): SearchedTerm => {
	return {
		type: SEARCHED_TERM,
		payload: term,
	};
};
