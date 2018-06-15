import FilterModel from "../../../model/FilterModel";

// tag model is used in filter groups
export default class TagModel {
	filter: FilterModel;
	isSelected: boolean;

	constructor(filter: FilterModel) {
		this.filter = filter;
		this.isSelected = false;
	}
}