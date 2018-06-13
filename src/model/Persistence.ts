import Recipe from "./Recipe";
import data from "../mockdata/recipes.json";
import glassware from "../mockdata/glassware.json";
import countries from "../mockdata/countries.json";
import liquidsData from "../mockdata/liquids.json";
import { Liquid } from "./Liquid";
import TagModel from "../components/tagcloud/model/TagModel";
import { Country } from "./Country";
import { GlassType } from "./GlassType";

export class Persistence {

	private static recipes = Persistence.getAllRecipes();

	static getRecipeById(id: number): Recipe {
		return Persistence.recipes.find((recipe) => recipe.id === id) || Persistence.recipes[0]; // defaults to first cocktail
	}

	static getRecipesByFilter(filter: string): Array<Recipe> {
		if (filter === "") {
			return Persistence.recipes;
		}
		return Persistence.recipes.filter((recipe) => recipe.name.indexOf(filter) !== -1); // what if filter is empty
	}

	static getRecipesByFilterAndTags(filter: string, selectedTags: Array<TagModel>): Array<Recipe> {
		return Persistence.recipes.filter((recipe) => {
			if (selectedTags.length === 0) {
				return Persistence.filterPredicate(recipe.name, filter);
			}
			for (let aComponent of recipe.components) {
				for (let tag of selectedTags) { // OR is used here, not AND
					if (tag.text === aComponent.name) {
						return Persistence.filterPredicate(recipe.name, filter);
					}
				}
			}
			return false;
		});
	}

	static getAllRecipes(): Array<Recipe> {
		return data;
	}

	static getAllLiquids(): Array<Liquid> {
		return liquidsData;
	}

	static getAllCountries(): Array<Country> {
		return countries;
	}

	static getAllGlassTypes(): Array<GlassType> {
		return glassware;
	}

	private static filterPredicate(input: string, filter: string): boolean {
		return input.indexOf(filter) !== -1;
	}
}