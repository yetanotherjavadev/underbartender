import * as React from "react";
import { Component } from "react";
import "./style/mainLayout.css";
import { FilterType } from "../../model/FilterType";
import { RouteComponentProps, withRouter } from "react-router";
import StatusLineContainer from "../../components/status/StatusLineContainer";
import SearchableTagCloudComponent from "../../components/tagcloud/searchable/SearchableTagCloudComponent";
import SimpleTagCloudComponent from "../../components/tagcloud/simple/SimpleTagCloudComponent";
import CocktailWidgetContainer from "../../components/cocktailwidget/CocktailWidgetContainer";
import CocktailsListContainer from "../../components/cocktailslist/CocktailsListContainer";

// this is a filter page (the body)
class FilterSelectorPage extends Component<RouteComponentProps<any>> {
	public render() {
		return (
			<div className="mainLayout">
				<div className="statusBlock">
					<StatusLineContainer/>
				</div>
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

export default withRouter(FilterSelectorPage);