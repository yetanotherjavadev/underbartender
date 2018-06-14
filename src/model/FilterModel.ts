import { FilterType } from "./FilterType";

export default class FilterModel {
	id: string;
	text: string;
	filterType: FilterType; // filterType defines the filter "group" this filter belongs to (e.g. COUNTRY, COCKTAIL_COMPONENT, STRENGTH, etc.)

	constructor(id: string, text: string, filterType: FilterType) {
		this.id = id;
		this.text = text;
		this.filterType = filterType;
	}

	toString(): string {
		return "text" + this.text + " type: " + this.filterType;
	}
}