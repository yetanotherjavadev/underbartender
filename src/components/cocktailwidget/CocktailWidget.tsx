import * as React from "react";
import { PureComponent } from "react";
import "./style/cocktailWidget.css";
import Recipe from "../../model/Recipe";

export type CocktailWidgetStateProps = {
	recipe: Recipe;
};

export default class CocktailWidget extends PureComponent<CocktailWidgetStateProps> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		if (this.props.recipe.name !== "nothing") {
			const ingredients = this.props.recipe.components.map((ingredient) => (
				<div className="ingredient" key={ingredient.name}>
					<div className="ingredientName">{ingredient.amount} of {ingredient.name}</div>
				</div>)
			);
			return (
				<div className="cocktailWidget">
					<div className="titleGroup">
						<div className="headerLabel">{this.props.recipe.name}</div>
						<div className="strengthLabel">{this.props.recipe.strength}% ABV</div>
					</div>
					<div className="description">{this.props.recipe.description}</div>
					<div className="ingredientsTable">
						{ingredients}
					</div>
					<div className="recipeText">{this.props.recipe.text}</div>
				</div>
			);
		} else {
			return (
				<div className="noRecipeAvailable">No recipe selected</div>
			);
		}
	}
}