import { connect } from "react-redux";
import { Dispatch } from "redux";
import TagCloud, { SimpleTagCloudDispatchProps, SimpleTagCloudStateProps } from "./simple/SimpleTagCloud";
import TagModel from "./model/TagModel";
import { taggerAction } from "../../redux/actions/TaggerAction";
import { Persistence } from "../../model/Persistence";
import { AppState } from "../../state/AppState";
import { FilterType } from "../../model/FilterType";
import FilterModel from "../../model/FilterModel";

const mapStateToProps = (state: AppState, props: { title: string }): SimpleTagCloudStateProps => ({
	tags: state.componentsTagCloudState.tags || Persistence.getAllLiquids().map((liquid) => (
		new TagModel(new FilterModel(liquid.id, liquid.name, FilterType.COCKTAIL_COMPONENT)))),
	title: props.title,
});

const mapDispatchToProps = (dispatch: Dispatch): SimpleTagCloudDispatchProps => ({
	onTagClick: (tag: TagModel) => {
		window.console.log("Clicked on cocktail component tag with name: " + tag.filter.text);
		tag.isSelected = !tag.isSelected;
		dispatch(taggerAction.updateSelectedTag(tag));
	}
});

const CocktailComponentsTagCloud = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagCloud);

export default CocktailComponentsTagCloud;