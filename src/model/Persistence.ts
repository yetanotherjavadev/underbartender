import Recipe from "./Recipe";
import data from "../mockdata/recipes.json";

export class Persistence {

	private recipes: Recipe[];

	constructor() {
		this.recipes = this.readRecipes();
	}

	public getRecipeByName(name: string): Recipe {
		return this.recipes[0];
	}

	public readRecipes(): Array<Recipe> {
		return data;
	}
}