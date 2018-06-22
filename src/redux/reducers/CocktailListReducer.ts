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

export const changeSelectedItemReducer = (state: number = initialState.selectedItemId, action: CocktailListAction | LocationChangeAction): number => {
	// if (action.type === CocktailListActionType.CHANGE_SELECTED_ITEM) {
	// 	const payload = (action as CocktailListAction).payload;
	// 	window.console.log("new cocktail has been selected: " + payload.selectedItemId);
	// 	return payload.selectedItemId;
	// }
	if (action.type === LOCATION_CHANGE) {
		const location = (action as LocationChangeAction).payload.location;

		const urlPattern2 = new UrlPattern("/cocktails/:id");
		const res2 = urlPattern2.match(location.pathname);

		if (res2) {
			if (state !== res2.id) {
				return res2.id;
			}
		}
	}

	return state;
};

// reminder:
// there should always be key:value syntax here for redux to understand which exact property should be changed in store
export const cocktailListReducer = combineReducers({
	selectedItemId: changeSelectedItemReducer,
	filter: changeFilterReducer,
}) as Reducer<CocktailListState>;