import { connect } from "react-redux";
import CocktailsList, { CocktailsListDispatchProps, CocktailsListStateProps } from "./CocktailsList";
import { Persistence } from "../../model/Persistence";
import { Dispatch } from "redux";
import { cocktailListActions } from "../../redux/actions/CocktailListAction";
import { AppState } from "../../state/AppState";
import FilterState from "../../state/filters/FilterState";

const mapStateToProps = (state: AppState): CocktailsListStateProps => {
	let soCalledFilterState = new FilterState();
	soCalledFilterState.appliedFilters.push(...state.countriesTagCloudState.tags.filter((tag) => tag.isSelected).map((tag) => tag.filter));
	soCalledFilterState.appliedFilters.push(...state.componentsTagCloudState.tags.filter((tag) => tag.isSelected).map((tag) => tag.filter));

	return {
		cocktails: Persistence.getRecipesWithFiltering(soCalledFilterState).map((recipe) => {
			return recipe.id;
		})
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