import { combineReducers, Reducer } from "redux";
import FilterState from "../../state/filters/FilterState";
import { FilterAction, FilterActionType } from "../actions/FilterAction";
import FilterModel from "../../model/FilterModel";
import { Persistence } from "../../model/Persistence";

// initial state of the application filters
const initialState: FilterState = {
	appliedFilters: Persistence.getAllFilters(), // no filters means that everything should be displayed
};

export const appliedFiltersReducer = (state: Array<FilterModel> = initialState.appliedFilters, action: FilterAction): Array<FilterModel> => {
	if (action.type === FilterActionType.FILTERS_CHANGED) {

		window.console.log("Filters have been changed with the following FilterModel pieces: ");
		action.payload.changedFilters.forEach((filter) => window.console.log("filter: " + filter));

		const changedFilterIds =  action.payload.changedFilters.map((filter: FilterModel) => filter.id);

		const newFilters = state.map((filter: FilterModel) => {
			if (changedFilterIds.indexOf(filter.id) >= 0) {
				return action.payload.changedFilters.find((changedFilter: FilterModel) => filter.id === changedFilter.id) || filter;
			} else {
				return filter;
			}
		});
		return newFilters;
	}
	return state;
};

// reminder:
// there should always be key:value syntax here for redux to understand which exact property should be changed in store
export const filterReducer = combineReducers({
	appliedFilters: appliedFiltersReducer,
}) as Reducer<FilterState>;