import FilterModel from "../../../model/FilterModel";

export default class TagModel {
	filter: FilterModel;
	isSelected: boolean;

	constructor(filter: FilterModel) {
		this.filter = filter;
		this.isSelected = false;
	}
}