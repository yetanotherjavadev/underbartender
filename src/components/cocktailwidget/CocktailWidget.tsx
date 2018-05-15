import { PureComponent } from "react";
import * as React from "react";
import "./style/cocktailWidget.css";
import Recipe from "../../model/Recipe";

export type CocktailWidgetProps = {
	recipe: Recipe;
};

export default class CocktailWidget extends PureComponent<CocktailWidgetProps> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		const ingredients = this.props.recipe.components.map((ingredient) => (
			<div className="ingredient" key={ingredient.name}>
				<div className="ingredientName" >{ingredient.amount} of {ingredient.name}</div>
			</div>)
		);
		return (
			<div className="main">
				<div className="headerLabel">{this.props.recipe.name}</div>
				<div className="description">{this.props.recipe.description}</div>
				<div className="ingredientsTable">
					{ingredients}
				</div>
				<div className="recipeText">{this.props.recipe.text}</div>
			</div>
		);
	}
}