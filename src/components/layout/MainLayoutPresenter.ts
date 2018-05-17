import { AppState } from "../../state/AppState";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import MainLayout from "./MainLayout";
import { CocktailWidgetProps } from "../cocktailwidget/CocktailWidget";
import { Persistence } from "../../model/Persistence";

const mapStateToProps = (state: AppState): CocktailWidgetProps => ({
	return {
		selectedCocktail: Persistence.get();
	};
});
​
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainLayout);