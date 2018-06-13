import { connect } from "react-redux";
import { Dispatch } from "redux";
import TagCloud, { TagCloudDispatchProps, TagCloudStateProps } from "./simple/SimpleTagCloud";
import TagModel from "./model/TagModel";
import { taggerActions } from "../../redux/actions/TaggerAction";
import { Persistence } from "../../model/Persistence";
import { AppState } from "../../state/AppState";

const mapStateToProps = (state: AppState, props: {title: string}): TagCloudStateProps => ({
		selectedTags: state.componentsTagCloudState.selectedTags,
		availableTags: state.componentsTagCloudState.availableTags || Persistence.getAllLiquids().map((liquid) => (new TagModel(liquid.name, liquid.id))),
		title: props.title
	});

const mapDispatchToProps = (dispatch: Dispatch): TagCloudDispatchProps => ({
	onTagClick: (tag: TagModel) => {
		window.console.log("Clicked on cocktail component tag with name: " + tag.text);
		tag.isSelected = !tag.isSelected;
		dispatch(taggerActions.updateSelectedTag(tag));
	}
});

const CocktailComponentsTagCloud = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagCloud);

export default CocktailComponentsTagCloud;