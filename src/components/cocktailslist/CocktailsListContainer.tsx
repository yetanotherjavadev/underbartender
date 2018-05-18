import { connect } from "react-redux";
import CocktailsList, { CocktailsListDispatchProps, CocktailsListStateProps } from "./CocktailsList";
import { Persistence } from "../../model/Persistence";
import { Dispatch } from "redux";
import { AppState } from "../../state/AppState";
import { changeSelectedItem } from "../../redux/actions/appstate.actions";

const mapStateToProps = (state: AppState): CocktailsListStateProps => ({
	cocktails: Persistence.getAllRecipes().map((recipe) => recipe.name) // all cocktails are not yet in State
});

const mapDispatchToProps = (dispatch: Dispatch): CocktailsListDispatchProps => ({
	onClick: (name: string) => {
		dispatch(changeSelectedItem(name));
	}
});

const CocktailListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CocktailsList);

export default CocktailListContainer;