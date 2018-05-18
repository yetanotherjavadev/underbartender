import * as React from "react";
import * as ReactDOM from "react-dom";
import MainLayout from "./components/layout/MainLayout";
import "./index.css";
import { Provider } from "react-redux";
import { mainStore } from "./redux/store/AppMainStore";

ReactDOM.render((
	<Provider store={mainStore}>
		<MainLayout/>
	</Provider>),
	document.getElementById("root"));