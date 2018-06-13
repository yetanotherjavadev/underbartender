import { CocktailWidgetStateProps, default as CocktailWidget } from "./CocktailWidget";
import { Persistence } from "../../model/Persistence";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../../state/AppState";

const mapStateToProps = (state: AppState): CocktailWidgetStateProps => {
	return {
		recipe: Persistence.getRecipeById(state.cocktailList.selectedCocktailId)
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const CocktailWidgetContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CocktailWidget);

export default CocktailWidgetContainer;