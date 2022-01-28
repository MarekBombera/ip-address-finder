import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchedTerm, fetchSearchedIP, fetchClientIP } from "../actions/";
import { RootState } from "../reducers/";

import arrow_icon from "../assets/images/icon-arrow.svg";

export const Search = (): JSX.Element => {
	const { searchedTermReducer, fetchClientReducer, errorHandlerReducer } =
		useSelector((state: RootState) => state);

	const dispatch = useDispatch();
	const errorRef = useRef<HTMLDivElement>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		if (searchedTermReducer.length === 0) {
			return;
		}

		dispatch(fetchSearchedIP(searchedTermReducer));
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch(searchedTerm(e.target.value));
	};

	useEffect(() => {
		if (errorHandlerReducer) {
			errorRef.current!.classList.add("search__error--active");
			return;
		}
		errorRef.current!.classList.remove("search__error--active");
	}, [errorHandlerReducer]);

	useEffect(() => {
		dispatch(fetchClientIP());
	}, [dispatch]);

	return (
		<div className="search">
			<div className="search__heading">
				<h1>IP Address Finder</h1>
				<div className="search__heading-client-ip">
					<p>Your IP address is:</p>
					<h4>
						{fetchClientReducer === null ? null : fetchClientReducer.ip_address}
					</h4>
				</div>
			</div>
			<div className="search__searchBar">
				<form onSubmit={handleSubmit}>
					<input
						onChange={handleInput}
						placeholder="Search for any IP address"
					></input>
					<button>
						<img className="icon" src={arrow_icon} alt=""></img>
					</button>
				</form>
				<div className="search__error" ref={errorRef}>
					<p>Please enter valid IP</p>
				</div>
			</div>
		</div>
	);
};
