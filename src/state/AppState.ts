import { CocktailListState } from "./CocktailListState";
import FilterState from "./filters/FilterState";
import { MixerState } from "./MixerState";

// a combined state that contains others as parts
export interface AppState {
	cocktailListState: CocktailListState;
	filterState: FilterState;
	mixerState: MixerState;
}