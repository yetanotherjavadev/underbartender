export class Liquid {
	id: number;
	name: string; // TODO: add description
	strength: number; // alc by vol in %
	density: number; // g/ml
	sugar: number; // % of sugar
	calories: number; // per 100ml
	countryOfOriginId: number; // country id
	category: string; // TODO: change to LiquidCategory
}