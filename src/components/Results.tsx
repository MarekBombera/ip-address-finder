import { useSelector } from "react-redux";
import { RootState } from "../reducers/";

import close_icon from "../assets/images/icon-arrow-close.svg";

export const Results = (): JSX.Element => {
	const { fetchSearchedReducer } = useSelector((state: RootState) => state);

	if (fetchSearchedReducer === null) {
		return <div></div>;
	}

	const { ip_address, city, country_code, postal_code } = fetchSearchedReducer;
	const { flag, timezone, connection } = fetchSearchedReducer;

	const dataSanitizer = (property: string): string => {
		const sanitizedProperty = property.replace(/null/g, "");
		return sanitizedProperty;
	};
	const mobileResultsToggle = (e: React.MouseEvent<HTMLDivElement>): void => {
		e.currentTarget.parentElement!.classList.toggle("results--closed");
		e.currentTarget.classList.toggle("results__close-icon--closed");
	};

	return (
		<div className="results">
			<div className="results__close-icon" onClick={mobileResultsToggle}>
				<img src={close_icon} alt="" />
			</div>
			<div className="results__flag">
				<img src={flag !== undefined ? dataSanitizer(flag.svg) : ""} alt="" />
			</div>
			<div className="results__ip">
				<p>ip address</p>
				<h4>{dataSanitizer(ip_address)}</h4>
			</div>
			<div className="results__location">
				<p>location</p>
				<h4>{dataSanitizer(`${city} / ${country_code} / ${postal_code}`)}</h4>
			</div>
			<div className="results__timezone">
				<p>timezone</p>
				<h4>
					{timezone !== undefined
						? dataSanitizer(
								`${timezone.abbreviation} ${timezone.gmt_offset}:00`
						  )
						: ""}
				</h4>
			</div>
			<div className="results__isp">
				<p>isp</p>
				<h4>
					{connection !== undefined ? dataSanitizer(connection.isp_name) : ""}
				</h4>
			</div>
		</div>
	);
};
