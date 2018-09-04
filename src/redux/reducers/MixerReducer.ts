import { combineReducers, Reducer } from "redux";
import { MixerState } from "../../state/MixerState";
import { Liquid } from "../../model/Liquid";
import { MixerAction, MixerActionType } from "../actions/MixerAction";

// initial state of componentsTagCloudState
const initialState: MixerState = {
	selectedLiquids: [],
};

export const changeSelectedLiquidsReducer = (state: Array<Liquid> = initialState.selectedLiquids, action: MixerAction): Array<Liquid> => {
	if (action.type === MixerActionType.MIXER_CHANGED) {
		return state; // TODO: merge states here
	}
	return state;
};

// reminder:
// there should always be key:values syntax here for redux to understand which exact property should be changed in store
export const mixerReducer = combineReducers({
	selectedLiquids: changeSelectedLiquidsReducer,
}) as Reducer<MixerState>;