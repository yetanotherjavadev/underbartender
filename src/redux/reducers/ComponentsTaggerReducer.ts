import { combineReducers, Reducer } from "redux";
import { ComponentsTaggerState } from "../../state/ComponentsTaggerState";
import { Persistence } from "../../model/Persistence";
import { FilterAction, FilterActionType } from "../actions/FilterAction";
import { FilterType } from "../../model/FilterType";
import FilterModel from "../../model/FilterModel";

// initial state of componentsTagCloudState
const initialState: ComponentsTaggerState = {
	tags: Persistence.getAllLiquids().map((liquid) => (new FilterModel(liquid.id, liquid.name, FilterType.COCKTAIL_COMPONENT)))
};

export const changeSelectedTagsReducer = (state: Array<FilterModel> = initialState.tags, action: FilterAction): Array<FilterModel> => {
	// this will reset the current selected tags
	if (action.type === FilterActionType.FILTERS_CHANGED) {
		let changedComponentFilters: Array<FilterModel> =
			action.payload.changedFilters.filter((filter) => filter.filterType === FilterType.COCKTAIL_COMPONENT);
		if (changedComponentFilters.length !== 0) {
			return [...state];
		}
	}
	return state;
};

// reminder:
// there should always be key:value syntax here for redux to understand which exact property should be changed in store
export const componentsTaggerReducer = combineReducers({
	tags: changeSelectedTagsReducer,
}) as Reducer<ComponentsTaggerState>;