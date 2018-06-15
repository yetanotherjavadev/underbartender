export default class Recipe {
	id: number;
	name: string;
	description: string;
	components: Array<Component>;
	text: string;
	countryOfOriginId: string;
	strength: number; // approximate strength
}

class Component {
	name: string;
	amount: string;
}