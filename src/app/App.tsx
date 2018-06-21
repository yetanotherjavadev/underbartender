import * as React from "react";
import { PureComponent } from "react";
import "./style/app.css";
import HeaderWidget from "../components/Header/HeaderWidget";
import FooterWidget from "../components/footer/FooterWidget";
import MainPanel from "../components/centralpanel/MainPanel";
import { mainStore } from "../redux/store/AppMainStore";
import { Provider } from "react-redux";

export default class App extends PureComponent {
	public render() {
		return (
			<Provider store={mainStore}>
				<div className="wholeApp">
					<HeaderWidget/>
					<MainPanel/>
					<FooterWidget/>
				</div>
			</Provider>
		);
	}
}