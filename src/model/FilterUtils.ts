import { FilterType } from "./FilterType";

export class FilterUtils {

	static filterTypeIsOneOf(filterType: FilterType, types: FilterType[]): boolean {
		for (let type of types) {
			if (type === filterType) {
				return true;
			}
		}
		return false;
	}
}