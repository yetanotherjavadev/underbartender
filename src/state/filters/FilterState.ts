import FilterModel from "../../model/FilterModel";

// all applied filters of the application
export default class FilterState {
	appliedFilters: Array<FilterModel>;

	constructor() {
		this.appliedFilters = [];
	}
}