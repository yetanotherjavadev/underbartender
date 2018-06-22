import * as React from "react";
import { Component } from "react";
import "./style/mainPanel.css";
import MainLayout from "../layout/MainLayout";
import { Route, RouteComponentProps, withRouter } from "react-router";
import FaqWidget from "../faq/FaqWidget";
import AboutWidget from "../about/AboutWidget";

class MainPanel extends Component<RouteComponentProps<any>> {
	render() {
		return (
			<div className="mainPanel">
				<Route exact={true} path="/" component={MainLayout}/>
				<Route path="/faq" component={FaqWidget}/>
				<Route path="/faq/:question?" component={FaqWidget}/>
				<Route path="/about" component={AboutWidget}/>
			</div>
		);
	}
}

export default withRouter(MainPanel);