import { connect } from "react-redux";
import CocktailsList, { CocktailListProps, CocktailsListDispatchProps, CocktailsListStateProps } from "./CocktailsList";
import { Persistence } from "../../model/Persistence";
import { Dispatch } from "redux";
import { AppState } from "../../state/AppState";
import { push } from "connected-react-router";

const mapStateToProps = (state: AppState): CocktailsListStateProps => {
	const filteredRecipes = Persistence.getRecipesWithFiltering(state.filterState);
	return {
		cocktails: filteredRecipes.map((recipe) => {
			return recipe.id;
		}),
		selectedItemId: state.cocktailListState.selectedItemId,
	};
};

const mapDispatchToProps = (dispatch: Dispatch): CocktailsListDispatchProps => ({
	actions: {
		changeSelectedItem:
			(id: number) => {
				dispatch(push(`/cocktails/${id}`));
			},
	}
});

// FIXME: corner case (id = 0)
const mergeProps = (stateProps: CocktailsListStateProps, dispatchProps: CocktailsListDispatchProps): CocktailListProps => {
	let selectedItemId = stateProps.selectedItemId;
	if (stateProps.cocktails.indexOf(stateProps.selectedItemId) < 0) {
		selectedItemId = stateProps.cocktails.length > 0 ? stateProps.cocktails[0] : 0;
		// dispatchProps.actions.changeSelectedItem(selectedItemId);
	}
	return {...stateProps, ...dispatchProps, selectedItemId: selectedItemId};
};

const CocktailListContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(CocktailsList);

export default CocktailListContainer;