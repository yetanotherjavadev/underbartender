import { CocktailListAction, CocktailListActionType } from "../actions/CocktailListAction";
import { CocktailListState } from "../../state/CocktailListState";
import { combineReducers, Reducer } from "redux";

// initial state of the app
const initialState: CocktailListState = {
	selectedItemId: 1,
	filter: ""
};

export const changeFilterReducer = (state: string = initialState.filter, action: CocktailListAction): string => {
	if (action.type === CocktailListActionType.CHANGE_FILTER) {
		window.console.log("items filter reducer called: " + action.payload.filter);
		return action.payload.filter;
	}
	return state;
};

export const changeSelectedItemReducer = (state: number = initialState.selectedItemId, action: CocktailListAction): number => {
	if (action.type === CocktailListActionType.CHANGE_SELECTED_ITEM) {
		window.console.log("new cocktail has been selected: " + action.payload.selectedItemId);
		return action.payload.selectedItemId;
	}

	return state;
};

// reminder:
// there should always be key:value syntax here for redux to understand which exact property should be changed in store
export const cocktailListReducer = combineReducers({
	selectedItemId: changeSelectedItemReducer,
	filter: changeFilterReducer,
}) as Reducer<CocktailListState>;