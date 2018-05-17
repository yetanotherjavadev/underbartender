export enum ActionType {
	CHANGE_SELECTED_ITEM = "CHANGE_SELECTED_ITEM",
	FILTER_ITEMS = "FILTER_ITEMS"
}

export interface ActionPayload {
	type: ActionType;
	selectedItem: string;
	filter: string;
}

export function changeSelectedItem(newSelectedCocktail: string) {
	return {type: ActionType.CHANGE_SELECTED_ITEM, selectedItem: newSelectedCocktail};
}

export function setVisibilityFilter(filter: string) {
	return {type: ActionType.FILTER_ITEMS, filter: filter};
}