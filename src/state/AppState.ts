import { CocktailListState } from "./CocktailListState";
import { TaggerState } from "./TaggerState";

// a combined state that contains others as parts
export interface AppState {
	cocktailList: CocktailListState;
	tagger: TaggerState;
}