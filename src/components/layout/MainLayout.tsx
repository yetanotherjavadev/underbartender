import * as React from "react";
import { PureComponent } from "react";
import HeaderWidget from "../Header/HeaderWidget";
import "./style/mainLayout.css";
import Menu from "../mainmenu/Menu";
import CocktailWidgetContainer from "../cocktailwidget/CocktailWidgetContainer";
import CocktailsListContainer from "../cocktailslist/CocktailsListContainer";
import TagCloudContainer from "../tagcloud/CocktailComponentsTagCloud";
import CountriesTagCloud from "../tagcloud/CountriesTagCloud";

class MainLayout extends PureComponent {

	public render() {
		return (
			<div className="mainLayout">
				<div className="topPanel">
					<HeaderWidget/>
					<Menu/>
				</div>
				<div className="workingArea">
					<div className="leftPanel">
						<CocktailsListContainer/>
					</div>
					<div className="centralPanel">
						<CocktailWidgetContainer/>
					</div>
					<div className="rightPanel">
						<TagCloudContainer title="Select Components"/>
						<CountriesTagCloud title="Select Country"/>
					</div>
				</div>
			</div>
		);
	}
}

export default MainLayout;