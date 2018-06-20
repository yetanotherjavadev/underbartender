import * as React from "react";
import { PureComponent } from "react";
import HeaderWidget from "../Header/HeaderWidget";
import "./style/mainLayout.css";
import Menu from "../mainmenu/Menu";
import CocktailWidgetContainer from "../cocktailwidget/CocktailWidgetContainer";
import CocktailsListContainer from "../cocktailslist/CocktailsListContainer";
import FooterWidget from "../footer/FooterWidget";
import GenericTagCloud from "../tagcloud/GenericTagCloud";
import { FilterType } from "../../model/FilterType";

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
						<div className="filterArea">
							<GenericTagCloud title="Components" filterType={FilterType.COCKTAIL_COMPONENT}/>
							<GenericTagCloud title="Number of components" filterType={FilterType.NUMBER_OF_COMPONENTS}/>
							<GenericTagCloud title="Country of Origin" filterType={FilterType.COUNTRY_OF_ORIGIN}/>
							{/*<GenericTagCloud title="Cocktail Type" filterType={FilterType.COCKTAIL_TYPE}/>*/}
							<GenericTagCloud title="Strength" filterType={FilterType.STRENGTH_GROUP}/>
							{/*<GenericTagCloud title="Quick Filter" filterType={FilterType.QUICK_FILTER}/>*/}
						</div>
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