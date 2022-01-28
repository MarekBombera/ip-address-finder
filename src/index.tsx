import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { App } from "./components/App";
import { rootReducer } from "./reducers";

ReactDOM.render(
	<Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
		<App />
	</Provider>,

	document.querySelector("#root")
);
