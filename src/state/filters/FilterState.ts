import FilterModel from "../../model/FilterModel";

export default class FilterState {
	appliedFilters: Array<FilterModel>;

	constructor() {
		this.appliedFilters = [];
	}
}