import { CocktailListState } from "./CocktailListState";
import { TaggerState } from "./TaggerState";
import FilterState from "./filters/FilterState";

// a combined state that contains others as parts
export interface AppState {
	cocktailListState: CocktailListState;
	componentsTagCloudState: TaggerState;
	filterState: FilterState;
}