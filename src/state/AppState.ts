// contains the whole state of the application
// will most likely be divided into separate and independent parts each describing its own part of the state

export class AppState {
	public selectedCocktailId: number;
	public filter: string;
}