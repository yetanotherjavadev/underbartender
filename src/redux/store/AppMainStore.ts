import { AnyAction, combineReducers, createStore, Store } from "redux";
import { cocktailListReducer } from "../reducers/cocktailList.reducer";
import { taggerReducer } from "../reducers/tagger.reducer";
import { AppState } from "../../state/AppState";

const reducers = {
	cocktailList: cocktailListReducer,
	tagger: taggerReducer,
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