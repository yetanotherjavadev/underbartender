import { CocktailListState } from "./CocktailListState";
import { TaggerState } from "./TaggerState";

export interface AppState {
	cocktailList: CocktailListState;
	tagger: TaggerState;
}