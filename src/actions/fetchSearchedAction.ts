import axios from "axios";
import { Dispatch } from "redux";
import {
	FETCH_SEARCHED_IP,
	FETCH_SEARCHED_ERROR_TRUE,
	FETCH_SEARCHED_ERROR_FALSE,
} from "./types";

const getSearchedIpUrl = `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_ABSTRACT_API_KEY}&ip_address=`;

export interface FetchSearchedAction {
	type: string;
	payload: object;
}

export interface HandleFetchError {
	type: string;
	payload: boolean;
}

export const fetchSearchedIP = (searchTerm: string) => {
	return async (dispatch: Dispatch) => {
		let response;

		try {
			response = await axios.get(`${getSearchedIpUrl}${searchTerm}`);
			dispatch<FetchSearchedAction>({
				type: FETCH_SEARCHED_IP,
				payload: response.data,
			});

			dispatch<HandleFetchError>({
				type: FETCH_SEARCHED_ERROR_FALSE,
				payload: false,
			});
		} catch (error: any) {
			if (error.response.status === 400) {
				dispatch<HandleFetchError>({
					type: FETCH_SEARCHED_ERROR_TRUE,
					payload: true,
				});
			}
		}
	};
};
