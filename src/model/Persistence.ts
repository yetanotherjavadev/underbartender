import Recipe from "./Recipe";
import data from "../mockdata/recipes.json";
import glassware from "../mockdata/glassware.json";
import countries from "../mockdata/countries.json";
import liquidsData from "../mockdata/liquids.json";
import { Liquid } from "./Liquid";
import TagModel from "../components/tagcloud/model/TagModel";
import { Country } from "./Country";
import { GlassType } from "./GlassType";
import FilterState from "../state/filters/FilterState";
import { FilterType } from "./FilterType";

export class Persistence {

	private static recipes = Persistence.getAllRecipes();

	static getRecipeById(id: number): Recipe {
		return Persistence.recipes.find((recipe) => recipe.id === id) || Persistence.recipes[0]; // defaults to first cocktail
	}

	static getRecipesByFilterAndTags(filter: string, selectedTags: Array<TagModel>): Array<Recipe> {
		return Persistence.recipes.filter((recipe) => {
			if (selectedTags.length === 0) {
				return Persistence.filterPredicate(recipe.name, filter);
			}
			for (let aComponent of recipe.components) {
				for (let tag of selectedTags) { // as it usually implemented in classic filter model OR is used here
					if (tag.filter.text === aComponent.name) {
						return Persistence.filterPredicate(recipe.name, filter);
					}
				}
			}
			return false;
		});
	}

	public static getFilterOfAKind(filterState: FilterState, filterType: FilterType) {
		return filterState.appliedFilters.filter((aFilter) => aFilter.filterType === filterType);
	}

	static getRecipesWithFiltering(filterState: FilterState): Array<Recipe> {
		if (filterState.appliedFilters.length === 0) {
			return Persistence.recipes;
		}

		let countryFilters = Persistence.getFilterOfAKind(filterState, FilterType.COUNTRY);
		let componentFilters = Persistence.getFilterOfAKind(filterState, FilterType.COCKTAIL_COMPONENT);

		let filtered = [...Persistence.recipes];

		// first filter out by country:
		if (countryFilters.length !== 0) {
			filtered = Persistence.recipes.filter((recipe) => {
				if (countryFilters.length !== 0) {
					for (let country of countryFilters) {
						if (Persistence.getCountryById(recipe.countryOfOriginId).id === country.id) {
							return true;
						}
					}
				}
				return false;
			});
		}

		// then filter out by components
		if (componentFilters.length !== 0) {
			filtered = filtered.filter((recipe) => {
				for (let recipeComponent of recipe.components) {
					for (let component of componentFilters) {
						if (component.text === recipeComponent.name) {
							return true;
						}
					}
				}
				return false;
			});
		}

		return filtered;
	}

	static getCountryById(id: string): Country {
		let result = this.getAllCountries().filter((country) => country.id === id)[0];
		return result || countries[0]; // defaults to "c0" = Internation
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