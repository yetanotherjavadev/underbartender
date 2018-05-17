import { ActionPayload, ActionType } from "../actions/appstate.actions";
import { AppState } from "../../state/AppState";
import { combineReducers } from "redux";

// initial state of the app
const initialState: AppState = {
	selectedCocktail: "White Russian",
	filter: ""
};

export const changeFilterReducer = (state: string = initialState.filter, action: ActionPayload): string => {
	if (action.type === ActionType.FILTER_ITEMS) {
		return action.filter;
	}
	return state;
};

export const changeSelectedItemReducer = (state: string = initialState.selectedCocktail, action: ActionPayload): string => {
	if (action.type === ActionType.CHANGE_SELECTED_ITEM) {
		return action.selectedItem;
	}
	return state;
};

export const compoundAppStateReducer = (state: AppState = initialState, action: ActionPayload): AppState => {
	return {
		selectedCocktail: changeSelectedItemReducer(state.selectedCocktail, action),
		filter: changeFilterReducer(state.filter, action)
	};
};
// equivalent to the structure above
export const combinedReducer = combineReducers({
	changeSelectedItemReducer,
	changeFilterReducer
});