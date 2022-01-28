import { Suspense, lazy } from "react";
import { Spinner } from "./Spinner";
import "../styles/css/main.css";

const Maps = lazy(() =>
	import("./Maps").then(({ Maps }) => ({ default: Maps }))
);
const Search = lazy(() =>
	import("./Search").then(({ Search }) => ({ default: Search }))
);
const Results = lazy(() =>
	import("./Results").then(({ Results }) => ({ default: Results }))
);

export const App = (): JSX.Element => {
	return (
		<div className="app">
			<Suspense fallback={<Spinner />}>
				<div className="app__main">
					<Search />
					<Results />
				</div>
				<Maps />
			</Suspense>
		</div>
	);
};
