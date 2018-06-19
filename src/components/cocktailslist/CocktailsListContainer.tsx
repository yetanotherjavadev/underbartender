import { connect } from "react-redux";
import CocktailsList, { CocktailsListDispatchProps, CocktailsListStateProps } from "./CocktailsList";
import { Persistence } from "../../model/Persistence";
import { Dispatch } from "redux";
import { cocktailListActions } from "../../redux/actions/CocktailListAction";
import { AppState } from "../../state/AppState";

const mapStateToProps = (state: AppState): CocktailsListStateProps => {
	return {
		cocktails: Persistence.getRecipesWithFiltering(state.filterState).map((recipe) => {
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