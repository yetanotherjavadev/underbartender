import * as React from "react";
import { PureComponent } from "react";
import HeaderWidget from "../Header/HeaderWidget";
import "./style/mainLayout.css";
import Menu from "../mainmenu/Menu";
import CocktailWidget from "../cocktailwidget/CocktailWidget";
import { testRecipe } from "../../model/Recipe";

class MainLayout extends PureComponent {

	// liquids: Array<Liquid> = this.readLiquids();

	public render() {
		return (
			<div className="mainLayout">
				<div className="topPanel">
					<HeaderWidget/>
					<Menu/>
				</div>
				<div className="workingArea">
					<div className="leftPanel"/>
					<div className="centralPanel">
						{/*<SearchBox/>*/}
						<CocktailWidget recipe={testRecipe}/>
					</div>
					<div className="rightPanel"/>
				</div>
				<div className="bottomPanel">
					Bottom panel placeholder
				</div>
			</div>
		);
	}
	// private readLiquids(): Array<Liquid> {
	// 	return data;
	// }
}

export default MainLayout;