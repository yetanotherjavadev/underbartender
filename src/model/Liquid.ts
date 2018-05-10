import { Country } from "./Country";

export class Liquid {
	id: number;
	name: string;
	countryOfOrigin: Country;
	category: LiquidCategory;
	strength: number; // alc by vol in %
	density: number; // g/ml
}