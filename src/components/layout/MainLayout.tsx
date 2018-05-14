import * as React from "react";
import { PureComponent } from "react";
import HeaderWidget from "../Header/HeaderWidget";
import SelectorWidget from "../liquidslist/LiquidsList";
import "./style/mainLayout.css";
import { Liquid } from "../../model/Liquid";
import data from "../../mockdata/liquids.json";
import SearchBox from "../searchbox/SearchBox";

class MainLayout extends PureComponent {

	liquids: Array<Liquid> = this.readLiquids();

	public render() {
		return (
			<div className="mainLayout">
				<div className="topPanel">
					<HeaderWidget/>
					<SearchBox/>
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
		return data;
	}
}

export default MainLayout;