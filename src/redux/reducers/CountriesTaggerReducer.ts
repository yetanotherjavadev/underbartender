import { combineReducers, Reducer } from "redux";
import { ComponentsTaggerState } from "../../state/ComponentsTaggerState";
import { Persistence } from "../../model/Persistence";
import TagModel from "../../components/tagcloud/model/TagModel";
import { AnyTaggerAction, TaggerActionType } from "../actions/TaggerAction";
import { FilterAction, FilterActionType } from "../actions/FilterAction";
import { FilterType } from "../../model/FilterType";
import FilterModel from "../../model/FilterModel";
import { CountriesTaggerState } from "../../state/CountriesTaggerState";

// initial state of componentsTagCloudState
const initialState: CountriesTaggerState = {
	tags: Persistence.getAllCountries().map((liquid) => (new TagModel(new FilterModel(liquid.id, liquid.name, FilterType.COUNTRY))))
};

type MegaAction = FilterAction | AnyTaggerAction;

export const changeSelectedTagsReducer = (state: Array<TagModel> = initialState.tags, action: MegaAction): Array<TagModel> => {
	if (action.type === TaggerActionType.TAG_CLICKED) {
		window.console.log("CountriesReducer: changed selected tag set reducer called: " + action.payload.clickedTag.filter.text);
		return [...state];
	}

	// this will reset the current selected tags
	if (action.type === FilterActionType.FILTERS_CHANGED) {
		let changedFilters: Array<FilterModel> = action.payload.changedFilters.filter((filter) => filter.filterType === FilterType.COUNTRY);
		if (changedFilters.length !== 0) {
			let newState = changedFilters.map((filter) => new TagModel(filter));
			return newState;
		}
	}
	return state;
};

// reminder:
// there should always be key:value syntax here for redux to understand which exact property should be changed in store
export const countriesTaggerReducer = combineReducers({
	tags: changeSelectedTagsReducer,
}) as Reducer<ComponentsTaggerState>;