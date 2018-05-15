import { Action } from "redux";

export enum AllActions { // what is this?
	CHANGE_SELECTED_ITEM = "CHANGE_SELECTED_ITEM",
	RELOAD_ITEMS = "RELOAD_ITEMS"
}

export interface ActionPayload extends Action<AllActions> {
	selectedCocktail: number;
}