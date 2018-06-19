import { CocktailListAction, CocktailListActionType } from "../actions/CocktailListAction";
import { CocktailListState } from "../../state/CocktailListState";
import { combineReducers, Reducer } from "redux";
import { FilterAction, FilterActionType } from "../actions/FilterAction";

// initial state of the app
const initialState: CocktailListState = {
	selectedCocktailId: 1,
	filter: ""
};

type AnyAction = CocktailListAction | FilterAction;

export const changeFilterReducer = (state: string = initialState.filter, action: CocktailListAction): string => {
	if (action.type === CocktailListActionType.CHANGE_FILTER) {
		window.console.log("items filter reducer called: " + action.payload.filter);
		return action.payload.filter;
	}
	return state;
};

export const changeSelectedItemReducer = (state: number = initialState.selectedCocktailId, action: AnyAction): number => {
	if (action.type === CocktailListActionType.CHANGE_SELECTED_ITEM) {
		window.console.log("new cocktail has been selected: " + action.payload.selectedCocktailId);
		return action.payload.selectedCocktailId;
	}
	if (action.type === FilterActionType.FILTERS_CHANGED) {
		window.console.log("external filter change detected: " + action.payload.changedFilters);
		return 1; // TODO: how to know waht to choose
	}
	return state;
};

// reminder:
// there should always be key:value syntax here for redux to understand which exact property should be changed in store
export const cocktailListReducer = combineReducers({
	selectedCocktailId: changeSelectedItemReducer,
	filter: changeFilterReducer,
}) as Reducer<CocktailListState>;