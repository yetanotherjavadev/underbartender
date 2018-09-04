import { AnyAction, combineReducers, createStore, Store, applyMiddleware, compose } from "redux";
import { cocktailListReducer } from "../reducers/CocktailListReducer";
import { componentsTaggerReducer } from "../reducers/ComponentsTaggerReducer";
import { AppState } from "../../state/AppState";
import { filterReducer } from "../reducers/FilterReducer";
import { countriesTaggerReducer } from "../reducers/CountriesTaggerReducer";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { mixerReducer } from "../reducers/MixerReducer";

// TODO: think how to avoid having keys name like "*state" but containing reducers
const rootReducer = combineReducers({
	cocktailListState: cocktailListReducer,
	componentsTagCloudState: componentsTaggerReducer,
	countriesTagCloudState: countriesTaggerReducer,
	mixerState: mixerReducer,
	filterState: filterReducer,
});

export const history = createBrowserHistory();

export const mainStore = createStore(
	connectRouter(history)(rootReducer),
	compose(
		applyMiddleware(routerMiddleware(history),
	),
)) as Store<AppState, AnyAction>;