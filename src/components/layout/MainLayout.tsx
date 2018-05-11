import * as React from "react";
import { PureComponent } from "react";
import HeaderWidget from "../Header/HeaderWidget";
import SelectorWidget from "../Selector/SelectorWidget";
import "./style/mainLayout.css";
import { Liquid } from "../../model/Liquid";

class MainLayout extends PureComponent {

	liquids: Array<Liquid> = this.readLiquids();

	public render() {
		return (
			<div className="mainLayout">
				<div className="topPanel">
					<HeaderWidget/>
				</div>
				<div className="workingArea">
					<div className="leftPanel"/>
					<div className="centralPanel">
						<SelectorWidget liquids={this.liquids}/>
					</div>
					<div className="rightPanel"/>
				</div>
				<div className="bottomPanel">
					<HeaderWidget/>
				</div>
			</div>
		);
	}

	private readLiquids(): Array<Liquid> {

		return null;
	}
}

export default MainLayout;