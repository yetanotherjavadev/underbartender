import Recipe from "./Recipe";
import data from "../mockdata/recipes.json";
import glassware from "../mockdata/glassware.json";
import countries from "../mockdata/countries.json";
import liquidsData from "../mockdata/liquids.json";
import italianLiquids from "../mockdata/liquids_italy.json";
import strengthGroups from "../mockdata/strengthGroups.json";
import drinkTypes from "../mockdata/drinkTypes.json";
import quickFilters from "../mockdata/quickFilters.json";
import { Liquid } from "./Liquid";
import { Country } from "./Country";
import { GlassType } from "./GlassType";
import FilterState from "../state/filters/FilterState";
import { FilterType } from "./FilterType";
import FilterModel from "./FilterModel";
import { FilterUtils } from "./FilterUtils";
import StrengthGroup from "./StrengthGroup";
import DrinkType from "./DrinkType";

export class Persistence {

	private static recipes = Persistence.getAllRecipes();

	static getRecipeById(id: number): Recipe {
		return Persistence.recipes.find((recipe) => recipe.id === id) || new Recipe("nothing"); // defaults to first cocktail
	}

	public static getFilterOfAKind(filters: Array<FilterModel>, filterType: FilterType) {
		return filters.filter((aFilter) => aFilter.filterType === filterType && aFilter.isSelected);
	}

	static filterBy(input: Array<Recipe>, filters: Array<FilterModel>, filterType: FilterType): Array<Recipe> {
		if (FilterUtils.filterTypeIsOneOf(filterType,
				[FilterType.COUNTRY_OF_ORIGIN, FilterType.NUMBER_OF_COMPONENTS, FilterType.STRENGTH_GROUP, FilterType.COCKTAIL_TYPE])) {
			return Persistence.simpleFilterBy(input, Persistence.getFilterOfAKind(filters, filterType));
		} else {
			return Persistence.complexFilterBy(input, filters);
		}
	}

	// TODO: refactor to have filter predicates
	static simpleFilterBy(input: Array<Recipe>, filters: Array<FilterModel>): Array<Recipe> {
		if (filters.length !== 0) {
			const fType = filters[0].filterType;
			input = input.filter((recipe) => {
				for (let aFilter of filters) {
					if (!aFilter.isSelected) {
						continue;
					}
					switch (fType) {
						case FilterType.COUNTRY_OF_ORIGIN:
							if (Persistence.getCountryById(recipe.countryOfOriginId).id === aFilter.id) {
								return true;
							}
							break;
						case FilterType.COCKTAIL_TYPE:
							if (recipe.cocktailTypeId === aFilter.id) {
								return true;
							}
							break;
						case FilterType.STRENGTH_GROUP:
							if (Persistence.getStrengthGroupId(recipe.strength) === aFilter.id) {
								return true;
							}
							break;
						case FilterType.NUMBER_OF_COMPONENTS:
							if (aFilter.value === "many" && recipe.components.length > 5) {
								return true;
							}
							if (recipe.components.length + "" === aFilter.value) { // TODO: think about values
								return true;
							}
							break;
						case FilterType.QUICK_FILTER: // TODO implement quick filters
							return true;
						default:
							return false;
					}
				}
				return false;
			});
		}
		return input;
	}

	static complexFilterBy(input: Array<Recipe>, filters: Array<FilterModel>): Array<Recipe> {
		// filter out by components
		if (filters.length !== 0) {
			const filterType = filters[0].filterType;
			if (filterType === FilterType.COCKTAIL_COMPONENT) {
				input = input.filter((recipe) => {
					for (let recipeComponent of recipe.components) {
						for (let component of filters) {
							if (component.value === recipeComponent.name) {
								return true;
							}
						}
					}
					return false;
				});
			}
		}
		return input;
	}

	static getRecipesWithFiltering(filterState: FilterState): Array<Recipe> {
		const activeFilters = filterState.appliedFilters.filter((filter: FilterModel) => filter.isSelected);
		if (activeFilters.length === 9 || activeFilters.length === 0) {
			return Persistence.recipes;
		}

		let filtered = [...Persistence.recipes];

		// TODO implement "filter count" not to enter filterBy(...) too much
		for (const filterType in FilterType) {
			if (!Number(filterType)) {
				filtered = Persistence.filterBy(filtered, activeFilters, <FilterType> FilterType[filterType]);
			}
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
		return [...liquidsData, ...italianLiquids];
	}

	static getAllCountries(): Array<Country> {
		return countries;
	}

	static getAllDrinkTypes(): Array<Country> {
		return drinkTypes;
	}

	static getAllQuickFilters(): Array<FilterModel> {
		return quickFilters;
	}

	static getAllStrengthGroup(): Array<Country> {
		return strengthGroups;
	}

	static getStrengthGroupId(strength: number): string {
		for (let strengthGroup of strengthGroups) {
			if (strengthGroup.minStrength <= strength && strengthGroup.maxStrength >= strength) {
				return strengthGroup.id;
			}
		}
		return "";
	}

	static getAllGlassTypes(): Array<GlassType> {
		return glassware;
	}

	static getAllFilters(): Array<FilterModel> {

		let numberOfComponentsFilters: Array<FilterModel> = [];
		for (let i = 1; i < 6; i++) {
			numberOfComponentsFilters.push(new FilterModel("nc" + i, i + "", FilterType.NUMBER_OF_COMPONENTS));
		}
		numberOfComponentsFilters.push(new FilterModel("ncN", "many", FilterType.NUMBER_OF_COMPONENTS));

		return countries.map((country: Country) => new FilterModel(country.id, country.name, FilterType.COUNTRY_OF_ORIGIN))
			.concat(liquidsData.map((liquid: Liquid) => new FilterModel(liquid.id, liquid.name, FilterType.COCKTAIL_COMPONENT)))
			.concat(numberOfComponentsFilters)
			.concat(quickFilters)
			.concat(strengthGroups.map((strengthGroup: StrengthGroup) => new FilterModel(strengthGroup.id,
				strengthGroup.minStrength + (strengthGroup.maxStrength ? " - " + strengthGroup.maxStrength : ""), FilterType.STRENGTH_GROUP))
				.concat(drinkTypes.map((type: DrinkType) => new FilterModel(type.id, type.name, FilterType.COCKTAIL_TYPE))));
	}
}