import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { history, mainStore } from "./redux/store/AppMainStore";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

ReactDOM.render((
		<Provider store={mainStore}>
			<ConnectedRouter history={history}>
				<App/>
			</ConnectedRouter>
		</Provider>
	),
	document.getElementById("root"));