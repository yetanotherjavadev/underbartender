import { CocktailListAction } from "../actions/CocktailListAction";
import { combineReducers, Reducer } from "redux";
import FilterState from "../../state/filters/FilterState";
import { FilterAction, FilterActionType } from "../actions/FilterAction";
import FilterModel from "../../model/FilterModel";

// initial state of the app
const initialState: FilterState = {
	appliedFilters: [],
};

export const selectedComponentReducer = (state: Array<FilterModel> = initialState.selectedComponents, action: FilterAction): Array<FilterModel> => {
	if (action.type === FilterActionType.FILTERS_CHANGED) {
		window.console.log("items filter reducer called: " + action.payload.changedFilters);
		return action.payload.changedFilters;
	}
	return state;
};



// reminder:
// there should always be key:value syntax here for redux to understand which exact property should be changed in store
export const filterReducer = combineReducers({
	selectedComponents: selectedComponentReducer,
	selectedCountries: selectedCountryReducer,
	selectedStrengthValues: selectedStrengthValuesReducer,
	selectedCocktailStyles: selectedCocktailStylesReducer,
}) as Reducer<FilterState>;