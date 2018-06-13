export class GlassType {
	id: number;
	name: string;
	volume: number; // TODO: think about creating range (e.g. 100-150ml)
	description: string;
	pictureId: number;
	categoryId: number; // which category this glassware belongs to (e.g. "wine glass", "cocktail glass", "speciality")
}