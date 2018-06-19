import Recipe from "./Recipe";
import data from "../mockdata/recipes.json";
import glassware from "../mockdata/glassware.json";
import countries from "../mockdata/countries.json";
import liquidsData from "../mockdata/liquids.json";
import { Liquid } from "./Liquid";
import { Country } from "./Country";
import { GlassType } from "./GlassType";
import FilterState from "../state/filters/FilterState";
import { FilterType } from "./FilterType";
import FilterModel from "./FilterModel";

export class Persistence {

	private static recipes = Persistence.getAllRecipes();

	static getRecipeById(id: number): Recipe {
		return Persistence.recipes.find((recipe) => recipe.id === id) || Persistence.recipes[0]; // defaults to first cocktail
	}

	public static getFilterOfAKind(filterState: FilterState, filterType: FilterType) {
		return filterState.appliedFilters.filter((aFilter) => aFilter.filterType === filterType && aFilter.isSelected);
	}

	static getRecipesWithFiltering(filterState: FilterState): Array<Recipe> {
		const activeFilters = filterState.appliedFilters.filter((filter: FilterModel) => filter.isSelected);
		if (activeFilters.length === 9 || activeFilters.length === 0) {
			return Persistence.recipes;
		}
		// TODO refactor
		let countryFilters = Persistence.getFilterOfAKind(filterState, FilterType.COUNTRY);
		let componentFilters = Persistence.getFilterOfAKind(filterState, FilterType.COCKTAIL_COMPONENT);

		let filtered = [...Persistence.recipes];

		// first filter out by country:
		if (countryFilters.length !== 0) {
			filtered = Persistence.recipes.filter((recipe) => {
				for (let country of countryFilters) {
					if (!country.isSelected) {
						continue;
					}
					if (Persistence.getCountryById(recipe.countryOfOriginId).id === country.id) {
						return true;
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
		return result || countries[0]; // defaults to "c0" = International
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

	static getAllFilters(): Array<FilterModel> {
		return countries.map((country: Country) => new FilterModel(country.id, country.name, FilterType.COUNTRY)).concat(
			liquidsData.map((liquid: Liquid) => new FilterModel(liquid.id, liquid.name, FilterType.COCKTAIL_COMPONENT)));
	}

	static getAllGlassTypes(): Array<GlassType> {
		return glassware;
	}
}