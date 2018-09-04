import * as React from "react";
import { Component } from "react";
import "./style/mainPanel.css";
import MainLayout from "../../pages/filters/FilterSelectorPage";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router";
import FaqWidget from "../faq/FaqWidget";
import AboutWidget from "../about/AboutWidget";
import Mixer from "../../pages/mixer/Mixer";

class MainPanel extends Component<RouteComponentProps<any>> {
	render() {
		return (
			<Switch>
				<div className="mainPanel">
					<Route path="/cocktails/:id?" component={MainLayout}/>
					<Route path="/mixer" component={Mixer}/>
					<Route path="/faq" component={FaqWidget}/>
					<Route path="/about" component={AboutWidget}/>
				</div>
			</Switch>
		);
	}
}

export default withRouter(MainPanel);