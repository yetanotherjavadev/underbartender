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

	// TODO: refactor
	static getStrengthGroupId(strength: number): string {
		if (strength <= 25) {
			return "sg" + strength % 5;
		} else if (strength > 26 && strength <= 40) {
			return "sg6";
		} else {
			return "sg7";
		}
	}
}