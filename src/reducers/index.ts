import { combineReducers } from "redux";
import { searchedTermReducer } from "./searchedTermReducer";
import { fetchSearchedReducer } from "./fetchSearchedReducer";
import { fetchClientReducer } from "./fetchClientReducer";
import { errorHandlerReducer } from "./errorHandlerReducer";

export const rootReducer = combineReducers({
	searchedTermReducer,
	fetchSearchedReducer,
	fetchClientReducer,
	errorHandlerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
