import { createStore } from "redux";
import { combinedReducer } from "../reducers/appstate.reducer";

export const mainStore = createStore(combinedReducer);