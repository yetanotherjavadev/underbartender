import { Liquid } from "./Liquid";

export class CompoundDrink {
	id: string;
	name: string;
	typeId: string;

	components: Array<Liquid>;
	strength: number;
}