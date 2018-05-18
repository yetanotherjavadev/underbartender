import Recipe from "./Recipe";
import data from "../mockdata/recipes.json";

export class Persistence {

	private static recipes = Persistence.getAllRecipes();

	static getRecipeByName(name: string): Recipe {
		return Persistence.recipes.find((element) => element.name === name) || Persistence.recipes[0]; // defaults to first cocktail
	}

	static getAllRecipes(): Array<Recipe> {
		return data;
	}
}