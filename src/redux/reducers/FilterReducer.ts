import { combineReducers, Reducer } from "redux";
import FilterState from "../../state/filters/FilterState";
import { FilterAction, FilterActionType } from "../actions/FilterAction";
import FilterModel from "../../model/FilterModel";

// initial state of the app
const initialState: FilterState = {
	appliedFilters: [], // no filters means that everything should be displayed
};

export const appliedFiltersReducer = (state: Array<FilterModel> = initialState.appliedFilters, action: FilterAction): Array<FilterModel> => {
	if (action.type === FilterActionType.FILTERS_CHANGED) {
		window.console.log("filter has been changed with the following FilterModel pieces: ");
		action.payload.changedFilters.forEach((filter) => window.console.log("filter: " + filter));
		// merging changed filters towards all filters
		// if (action.payload.changedFilters)
		return action.payload.changedFilters;
	}
	return state;
};

// reminder:
// there should always be key:value syntax here for redux to understand which exact property should be changed in store
export const filterReducer = combineReducers({
	appliedFilters: appliedFiltersReducer,
}) as Reducer<FilterState>;