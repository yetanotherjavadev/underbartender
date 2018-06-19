import { connect } from "react-redux";
import CocktailsList, { CocktailsListDispatchProps, CocktailsListStateProps } from "./CocktailsList";
import { Persistence } from "../../model/Persistence";
import { Dispatch } from "redux";
import { cocktailListActions } from "../../redux/actions/CocktailListAction";
import { AppState } from "../../state/AppState";
import Recipe from "../../model/Recipe";

const mapStateToProps = (state: AppState): CocktailsListStateProps => {
	const filteredRecipes = Persistence.getRecipesWithFiltering(state.filterState);
	let newSelectedItem = state.cocktailListState.selectedCocktailId;
	if (!filteredRecipes.find((recipe: Recipe) => recipe.id === state.cocktailListState.selectedCocktailId)) {
		newSelectedItem = filteredRecipes.length !== 0 ? filteredRecipes[0].id : 0;
	}
	return {
		cocktails: filteredRecipes.map((recipe) => {
			return recipe.id;
		}),
		selectedCocktailId: newSelectedItem,
	};
};

const mapDispatchToProps = (dispatch: Dispatch): CocktailsListDispatchProps => ({
	onClick: (id: number) => {
		dispatch(cocktailListActions.changeSelectedItem(id));
	}
});

const CocktailListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CocktailsList);

export default CocktailListContainer;