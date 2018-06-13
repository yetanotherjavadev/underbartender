import FilterModel from "../../model/FilterModel";

export default class FilterState {
	appliedFilters: Array<FilterModel>;

	// filters are "all in one". this will hopefully simplify routing and state management

	// selectedComponents: Array<number>; // ids of tagged components
	// selectedCountries: Array<number>; // ids of tagged countries
	// selectedStrengthValues: Array<number>; // values of strength (TODO: think of making ranges here)
	// selectedCocktailStyles: Array<number>; // long, shot, exotic, etc.

}