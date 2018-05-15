export default class Recipe {
	id: number;
	name: string;
	description: string;
	components: Array<Component>;
	text: string;
	strength: number; // approximate strength
}

class Component {
	name: string;
	amount: string;
}

export const testRecipe: Recipe = JSON.parse("\n" +
	"{\n" +
	"\t\"id\": 1,\n" +
	"\t\"name\": \"Racketeer\",\n" +
	"\t\"description\":\"Mixed Drink Recipe from Cocktail Builder\",\n" +
	"\t\"components\":[\n" +
	"\t\t{\"name\":\"rye\",\n" +
	"\t\t \"amount\": \"1 oz\"},\n" +
	"\t{\"name\":\"Mezcal\",\n" +
	"\t\t\"amount\": \"1 oz\"},\n" +
	"\t{\"name\":\"benedictine\",\n" +
	"\t\t\"amount\": \"1/2 oz\"},\n" +
	"\t{\"name\":\"sweet vermouth\",\n" +
	"\t\t\"amount\": \"1/2 oz\"},\n" +
	"\t{\"name\":\"Herbal Liqueur\",\n" +
	"\t\t\"amount\": \"1/4 oz\"},\n" +
	"\t{\"name\":\"Peychaud's Bitters\",\n" +
	"\t\t\"amount\": \"3 dash\"},\n" +
	"\t{\"name\":\"Islay Scotch\",\n" +
	"\t\t\"amount\": \"1 rinse\"}\n" +
	"\t\t],\n" +
	"\t\"text\": \"Rinse coupe, stir, strain, up.\",\n" +
	"\t\"strength\": 20\n" +
	"}");
