import { CocktailListState } from "./CocktailListState";
import FilterState from "./filters/FilterState";

// a combined state that contains others as parts
export interface AppState {
	cocktailListState: CocktailListState;
	// other pieces will be here
	filterState: FilterState;
}