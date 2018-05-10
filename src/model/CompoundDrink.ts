import { Liquid } from "./Liquid";

export class CompoundDrink {
	id: string;
	name: string;
	type: DrinkType;

	components: Array<Liquid>;
	strength: number;
}