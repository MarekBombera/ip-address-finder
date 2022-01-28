import axios from "axios";
import { Dispatch } from "redux";
import { FETCH_CLIENT_IP } from "./types";

const getClientIpUrl = `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_ABSTRACT_API_KEY}`;

export interface FetchClientIP {
	type: string;
	payload: object;
}

export const fetchClientIP = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get(getClientIpUrl);

		dispatch<FetchClientIP>({
			type: FETCH_CLIENT_IP,
			payload: response.data,
		});
	};
};
