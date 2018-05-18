export enum ActionType {
	CHANGE_SELECTED_ITEM = "CHANGE_SELECTED_ITEM",
	FILTER_ITEMS = "FILTER_ITEMS"
}

export interface ActionPayload {
	type: ActionType;
	selectedItem: number;
	filter: string;
}

export function changeSelectedItem(selectedItem: number) {
	return {type: ActionType.CHANGE_SELECTED_ITEM, selectedItem: selectedItem};
}

export function setVisibilityFilter(filter: string) {
	return {type: ActionType.FILTER_ITEMS, filter: filter};
}