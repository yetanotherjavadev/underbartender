import { CocktailListAction, CocktailListActionType } from "../actions/CocktailListAction";
import { CocktailListState } from "../../state/CocktailListState";
import { combineReducers, Reducer } from "redux";
import { LOCATION_CHANGE } from "connected-react-router";
import { LocationChangeAction } from "../actions/LocationChangeAction";
import * as UrlPattern from "url-pattern";

// initial state of the app
const initialState: CocktailListState = {
	selectedItemId: 1,
	filter: ""
};

export const changeFilterReducer = (state: string = initialState.filter, action: CocktailListAction | LocationChangeAction): string => {
	if (action.type === CocktailListActionType.CHANGE_FILTER) {
		const payload = (action as CocktailListAction).payload;
		window.console.log("items filter reducer called: " + payload.filter);
		return payload.filter;
	}
	return state;
};

// the only way to change selected item is to listen to location change
// so any source of data that according to specs should be able to change selected item should only change the location URL
export const changeSelectedItemReducer = (state: number = initialState.selectedItemId, action: CocktailListAction | LocationChangeAction): number => {
	if (action.type === LOCATION_CHANGE) {
		const location = (action as LocationChangeAction).payload.location;

		const urlPattern = new UrlPattern("/cocktails/:id");
		const parsedResult = urlPattern.match(location.pathname);

		if (parsedResult) {
			if (state !== parsedResult.id) {
				window.console.log("new cocktail has been selected: " + parsedResult.id);
				return parseInt(parsedResult.id, 10);
			}
		}
	}
	return state;
};

// reminder:
// there should always be key:values syntax here for redux to understand which exact property should be changed in store
export const cocktailListReducer = combineReducers({
	selectedItemId: changeSelectedItemReducer,
	filter: changeFilterReducer,
}) as Reducer<CocktailListState>;