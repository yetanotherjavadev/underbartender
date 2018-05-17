import * as React from "react";
import { PureComponent } from "react";
import HeaderWidget from "../Header/HeaderWidget";
import "./style/mainLayout.css";
import Menu from "../mainmenu/Menu";
import CocktailWidget from "../cocktailwidget/CocktailWidget";
import { testRecipe } from "../../model/Recipe";
import CocktailsList from "../cocktailslist/CocktailsList";
import { Dispatch } from "redux";
import { AppState } from "../../state/AppState";
import { connect } from "react-redux";

const mapStateToProps = (state: AppState) => {
	return {
		selectedItem: state.selectedCocktail,
		filter: state.filter
	};
};
​
const mapDispatchToProps = undefined;

export connect(
	mapStateToProps,
	mapDispatchToProps
)(MainLayout);

class MainLayout extends PureComponent {


	cocktails: Array<string> = ["White Russian", "Negroni", "Gin Tonic"];

	public render() {
		return (
			<div className="mainLayout">
				<div className="topPanel">
					<HeaderWidget/>
					<Menu/>
				</div>
				<div className="workingArea">
					<div className="leftPanel">
						<CocktailsList cocktails={this.cocktails}/>
					</div>
					<div className="centralPanel">
						<CocktailWidget recipe={testRecipe}/>
					</div>
					<div className="rightPanel"/>
				</div>
			</div>
		);
	}
}

export default MainLayout;