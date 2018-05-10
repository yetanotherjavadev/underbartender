import { PureComponent } from "react";
import * as React from "react";
import HeaderWidget from "../Header/HeaderWidget";
import SelectorWidget from "../Selector/SelectorWidget";
import "./style/mainLayout.css";

class MainLayout extends PureComponent {
	public render() {
		return (
			<div className="mainLayout">
				<div className="topPanel">
					<HeaderWidget/>
				</div>
				<div className="workingArea">
					<div className="leftPanel"/>
					<div className="centralPanel">
						<SelectorWidget/>
					</div>
					<div className="rightPanel"/>
				</div>
				<div className="bottomPanel">
					<HeaderWidget/>
				</div>
			</div>
		);
	}
}

export default MainLayout;