import * as React from "react";
import { PureComponent } from "react";
import "./style/mainLayout.css";
import CocktailWidgetContainer from "../cocktailwidget/CocktailWidgetContainer";
import CocktailsListContainer from "../cocktailslist/CocktailsListContainer";
import SimpleTagCloudComponent from "../tagcloud/simple/SimpleTagCloudComponent";
import { FilterType } from "../../model/FilterType";
import SearchableTagCloudComponent from "../tagcloud/searchable/SearchableTagCloudComponent";

// this is a filter page
export default class MainLayout extends PureComponent {
	public render() {
		return (
			<div className="mainLayout">
				<div className="workingArea">
					<div className="leftPanel">
						<div className="filterArea">
							<SearchableTagCloudComponent maxItemsVisible={5} title="Component" filterType={FilterType.COCKTAIL_COMPONENT}/>
							<SimpleTagCloudComponent title="Number of components" filterType={FilterType.NUMBER_OF_COMPONENTS}/>
							<SearchableTagCloudComponent maxItemsVisible={5} title="Country of Origin" filterType={FilterType.COUNTRY_OF_ORIGIN}/>
							{/*<GenericTagCloud title="Cocktail Type" filterType={FilterType.COCKTAIL_TYPE}/>*/}
							<SimpleTagCloudComponent title="Strength" filterType={FilterType.STRENGTH_GROUP}/>
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
			</div>
		);
	}
}