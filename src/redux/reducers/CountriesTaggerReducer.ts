import { combineReducers, Reducer } from "redux";
import { ComponentsTaggerState } from "../../state/ComponentsTaggerState";
import { Persistence } from "../../model/Persistence";
import { FilterAction, FilterActionType } from "../actions/FilterAction";
import { FilterType } from "../../model/FilterType";
import FilterModel from "../../model/FilterModel";
import { CountriesTaggerState } from "../../state/CountriesTaggerState";

// initial state of componentsTagCloudState
const initialState: CountriesTaggerState = {
	tags: Persistence.getAllCountries().map((liquid) => (new FilterModel(liquid.id, liquid.name, FilterType.COUNTRY_OF_ORIGIN)))
};

export const changeSelectedTagsReducer = (state: Array<FilterModel> = initialState.tags, action: FilterAction): Array<FilterModel> => {

	// this will reset the current selected tags
	if (action.type === FilterActionType.FILTERS_CHANGED) {
		let changedFilters: Array<FilterModel> = action.payload.changedFilters.filter((filter: FilterModel) =>
			filter.filterType === FilterType.COUNTRY_OF_ORIGIN);
		if (changedFilters.length !== 0) {
			return changedFilters;
		}
	}
	// if (action.type === LOCATION_CHANGE) {
	// 	window.console.log(action);
	//
	// }
	return state;
};

// reminder:
// there should always be key:value syntax here for redux to understand which exact property should be changed in store
export const countriesTaggerReducer = combineReducers({
	tags: changeSelectedTagsReducer,
}) as Reducer<ComponentsTaggerState>;