import * as React from "react";
import { Component } from "react";
import "./style/app.css";
import HeaderWidget from "../components/Header/HeaderWidget";
import FooterWidget from "../components/footer/FooterWidget";
import MainPanel from "../components/centralpanel/MainPanel";

class App extends Component<any> {
	public render() {
		return (
			<div className="wholeApp">
				<HeaderWidget/>
				<MainPanel/>
				<FooterWidget/>
			</div>
		);
	}
}

export default App;