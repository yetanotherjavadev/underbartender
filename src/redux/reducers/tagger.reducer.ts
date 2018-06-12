import { combineReducers, Reducer } from "redux";
import { TaggerState } from "../../state/TaggerState";
import { Persistence } from "../../model/Persistence";
import TagModel from "../../components/tagcloud/model/TagModel";
import { TaggerAction, TaggerActionType } from "../actions/TaggerAction";

// initial state of tagger
const initialState: TaggerState = {
	selectedTags: [],
	availableTags: Persistence.getAllLiquids().map((liquid) => (new TagModel(liquid.name, liquid.id)))
};

export const changeSelectedTagsReducer = (state: Array<TagModel> = initialState.selectedTags, action: TaggerAction): Array<TagModel> => {
	if (action.type === TaggerActionType.TAG_CLICKED) {
		window.console.log("changed selected tag set reducer called: " + action.payload.clickedTag.text);

		let newState = [...state];
		if (state.indexOf(action.payload.clickedTag) !== -1) {
			newState = newState.filter(item => item !== action.payload.clickedTag);
		} else {
			newState.push(action.payload.clickedTag);
		}
		return newState;
	}

	return state;
};

export const changeAvailableTagsReducer = (state: Array<TagModel> = initialState.availableTags, action: TaggerAction): Array<TagModel> => {
	if (action.type === TaggerActionType.CHANGE_AVAILABLE_TAG_SET) {
		return action.payload.availableTags;
	}
	return state;
};

// reminder:
// there should always be key:value syntax here for redux to understand which exact property should be changed in store
export const taggerReducer = combineReducers({
	selectedTags: changeSelectedTagsReducer,
	availableTags: changeAvailableTagsReducer
}) as Reducer<TaggerState>;