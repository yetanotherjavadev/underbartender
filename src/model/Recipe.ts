export default class Recipe {
	id: number;
	name: string;
	description: string;
	components: Array<Component>;
	text: string;
	countryOfOriginId: string;
	strength: number; // approximate strength
	cocktailTypeId: string;

	constructor(name: string) {
		this.name = name;
	}
}

class Component {
	name: string;
	amount: string;
}