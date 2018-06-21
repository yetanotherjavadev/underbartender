import { PureComponent } from "react";
import * as React from "react";
import "./style/mainPanel.css";
import MainLayout from "../layout/MainLayout";
import { Route, Switch } from "react-router";
import FaqWidget from "../faq/FaqWidget";
import AboutWidget from "../about/AboutWidget";

export default class MainPanel extends PureComponent {
	render() {
		return (
			<div className="mainPanel">
				<Switch>
					<Route exact={true} path="/" component={MainLayout}/>
					<Route path="/faq" component={FaqWidget}/>
					<Route path="/about" component={AboutWidget}/>
				</Switch>
			</div>
		);
	}
}