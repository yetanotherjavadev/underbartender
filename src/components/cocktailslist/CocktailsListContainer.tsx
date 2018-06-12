import { connect } from "react-redux";
import CocktailsList, { CocktailsListDispatchProps, CocktailsListStateProps } from "./CocktailsList";
import { Persistence } from "../../model/Persistence";
import { Dispatch } from "redux";
import { appstateActions } from "../../redux/actions/CocktailListAction";
import { AppState } from "../../state/AppState";

const mapStateToProps = (state: AppState): CocktailsListStateProps => ({
	cocktails: Persistence.getAllRecipes().map((recipe) => recipe.id) // all cocktails are not yet in State
});

const mapDispatchToProps = (dispatch: Dispatch): CocktailsListDispatchProps => ({
	onClick: (id: number) => {
		dispatch(appstateActions.changeSelectedItem(id));
	}
});

const CocktailListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CocktailsList);

export default CocktailListContainer;