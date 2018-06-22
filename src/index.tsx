import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { mainStore } from "./redux/store/AppMainStore";
import { Provider } from "react-redux";

ReactDOM.render((
		<Provider store={mainStore}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</Provider>
	),
	document.getElementById("root"));