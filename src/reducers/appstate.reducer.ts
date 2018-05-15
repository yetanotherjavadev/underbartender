import { AppState } from "../state/AppState";
import { ActionPayload } from "../actions/appstate.actions";

const defaultState: AppState = {
	selectedCocktail: 1,
	selectedTags: []
};

const messageReducer = (state: AppState = defaultState, action: ActionPayload): AppState => {
	return {...state, selectedCocktail: action.selectedCocktail};
};

export default messageReducer;