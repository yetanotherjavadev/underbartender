import { AnyAction, combineReducers, createStore, Store } from "redux";
import { cocktailListReducer } from "../reducers/CocktailListReducer";
import { taggerReducer } from "../reducers/TaggerReducer";
import { AppState } from "../../state/AppState";

// TODO: think how to avoid having keys name like "*state" but containing reducers
const reducers = {
	cocktailListState: cocktailListReducer,
	componentsTagCloudState: taggerReducer,
	filterState: filterReducer,
};

export const mainStore = createStore(combineReducers(reducers)) as Store<AppState, AnyAction>;

// export const configureStore = (rootReducer: Reducer): Store<AppState, AnyAction> => {
// 	return createStore(
// 		rootReducer,
// 		compose(
// 			applyMiddleware(...middlewares),
// 			DevTools.instrument()
// 		)
// 	);
// };