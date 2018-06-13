export default class TagModel {
	text: string;
	id: number;
	isSelected: boolean;

	constructor(text: string, id: number) {
		this.text = text;
		this.id = id;
		this.isSelected = false;
	}
}