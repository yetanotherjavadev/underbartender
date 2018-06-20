import { FilterType } from "./FilterType";

export default class FilterModel {
	id: string;
	value: string;
	filterType: FilterType; // filterType defines the filter "group" this filter belongs to (e.g. COUNTRY_OF_ORIGIN, COCKTAIL_COMPONENT, STRENGTH_GROUP, etc.)
	isSelected: boolean;

	constructor(id: string, text: string, filterType: FilterType) {
		this.id = id;
		this.value = text;
		this.filterType = filterType;
		this.isSelected = false;
	}

	toString(): string {
		return "value" + this.value + " typeId: " + this.filterType;
	}
}