import * as React from "react";
import { PureComponent } from "react";
import HeaderWidget from "../Header/HeaderWidget";
import "./style/mainLayout.css";
import Menu from "../mainmenu/Menu";
import CocktailWidgetContainer from "../cocktailwidget/CocktailWidgetContainer";
import CocktailsListContainer from "../cocktailslist/CocktailsListContainer";
import TagCloudContainer from "../tagcloud/CocktailComponentsTagCloud";
import CountriesTagCloud from "../tagcloud/CountriesTagCloud";
import FooterWidget from "../footer/FooterWidget";

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
						<TagCloudContainer title="Select Components"/>
						<CountriesTagCloud title="Select Country"/>
					</div>
					<div className="centralPanel">
						<CocktailsListContainer/>
					</div>
					<div className="rightPanel">
						<CocktailWidgetContainer/>
					</div>
				</div>
				<div className="bottomPanel">
					<FooterWidget/>
				</div>
			</div>
		);
	}
}

export default MainLayout;