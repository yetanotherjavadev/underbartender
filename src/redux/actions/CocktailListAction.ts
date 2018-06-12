import GenericAction from "./GenericAction";

export enum CocktailListActionType {
	CHANGE_SELECTED_ITEM = "CHANGE_SELECTED_ITEM",
	CHANGE_FILTER = "CHANGE_FILTER"
}

export interface CocktailListActionPayload {
	selectedCocktailId: number;
	filter: string;
}

export interface CocktailListAction extends GenericAction<CocktailListActionPayload, CocktailListActionType> {}

export const appstateActions = {
	changeSelectedItem: (selectedItem: number) => ({
		type: CocktailListActionType.CHANGE_SELECTED_ITEM,
		payload: {selectedCocktailId: selectedItem}
	}),
	changeFilter: (filter: string) => ({
		type: CocktailListActionType.CHANGE_FILTER,
		payload: {filter: filter}
	})
};