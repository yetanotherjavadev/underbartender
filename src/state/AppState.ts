import { CocktailListState } from "./CocktailListState";
import { ComponentsTaggerState } from "./ComponentsTaggerState";
import FilterState from "./filters/FilterState";
import { CountriesTaggerState } from "./CountriesTaggerState";

// a combined state that contains others as parts
export interface AppState {
	cocktailListState: CocktailListState;
	componentsTagCloudState: ComponentsTaggerState; // TODO: think about using just TaggerState instead of different classes
	countriesTagCloudState: CountriesTaggerState;
	filterState: FilterState;
}