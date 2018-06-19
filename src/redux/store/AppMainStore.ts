import { AnyAction, combineReducers, createStore, Store } from "redux";
import { cocktailListReducer } from "../reducers/CocktailListReducer";
import { componentsTaggerReducer } from "../reducers/ComponentsTaggerReducer";
import { AppState } from "../../state/AppState";
import { filterReducer } from "../reducers/FilterReducer";
import { countriesTaggerReducer } from "../reducers/CountriesTaggerReducer";

// TODO: think how to avoid having keys name like "*state" but containing reducers
const reducers = {
	cocktailListState: cocktailListReducer,
	componentsTagCloudState: componentsTaggerReducer,
	countriesTagCloudState: countriesTaggerReducer,
	filterState: filterReducer,
};

export const mainStore = createStore(combineReducers(reducers)) as Store<AppState, AnyAction>;

// TODO: add DevTools to be able to debug easily
// export const configureStore = (rootReducer: Reducer): Store<AppState, AnyAction> => {
// 	return createStore(
// 		rootReducer,
// 		compose(
// 			applyMiddleware(...middlewares),
// 			DevTools.instrument()
// 		)
// 	);
// };