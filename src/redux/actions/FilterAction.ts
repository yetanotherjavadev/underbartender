import GenericAction from "./GenericAction";
import FilterModel from "../../model/FilterModel";

export enum FilterActionType {
	FILTERS_CHANGED = "FILTERS_CHANGED",
	// TODO: probably should extend this to more granular actions
}

export interface FilterActionPayload {
	changedFilters: Array<FilterModel>;
}

export interface FilterAction extends GenericAction<FilterActionPayload, FilterActionType> {}

export const filterActions = {
	filterChanged: (changedFilters: Array<FilterModel>) => ({
		type: FilterActionType.FILTERS_CHANGED,
		payload: {
			changedFilters: changedFilters
		}
	})
};