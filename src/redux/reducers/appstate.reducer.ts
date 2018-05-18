import { ActionPayload, ActionType } from "../actions/appstate.actions";
import { AppState } from "../../state/AppState";
import { combineReducers, Reducer } from "redux";

// initial state of the app
const initialState: AppState = {
	selectedCocktail: "Racketeer",
	filter: ""
};

export const changeFilterReducer = (state: string = initialState.filter, action: ActionPayload): string => {
	if (action.type === ActionType.FILTER_ITEMS) {
		window.console.log("items filter reducer called: " + action.filter);
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

// reminder:
// there should always be key:value syntax here for redux to understand which exact property should be changed in store
export const combinedReducer = combineReducers({
	selectedCocktail: changeSelectedItemReducer,
	filter: changeFilterReducer
}) as Reducer<AppState>;