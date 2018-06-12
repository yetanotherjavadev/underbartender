import * as React from "react";
import { PureComponent } from "react";
import HeaderWidget from "../Header/HeaderWidget";
import "./style/mainLayout.css";
import Menu from "../mainmenu/Menu";
import CocktailWidgetContainer from "../cocktailwidget/CocktailWidgetContainer";
import CocktailsListContainer from "../cocktailslist/CocktailsListContainer";
import TagCloudContainer from "../tagcloud/TagCloudContainer";

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
						<TagCloudContainer/>
					</div>
				</div>
			</div>
		);
	}
}

export default MainLayout;