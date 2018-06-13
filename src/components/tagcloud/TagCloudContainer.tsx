import { connect } from "react-redux";
import { Dispatch } from "redux";
import TagCloud, { TagCloudDispatchProps, TagCloudStateProps } from "./TagCloud";
import TagModel from "./model/TagModel";
import { taggerActions } from "../../redux/actions/TaggerAction";
import { Persistence } from "../../model/Persistence";
import { AppState } from "../../state/AppState";

// TODO: use TaggerState here as parameter, not AppState
const mapStateToProps = (state: AppState): TagCloudStateProps => ({
		selectedTags: state.tagger.selectedTags,
		availableTags: state.tagger.availableTags || Persistence.getAllLiquids().map((liquid) => (new TagModel(liquid.name, liquid.id))),
	});

const mapDispatchToProps = (dispatch: Dispatch): TagCloudDispatchProps => ({
	onTagClick: (tag: TagModel) => {
		window.console.log("Clicked on tag with id: " + tag.id);
		tag.isSelected = !tag.isSelected;
		dispatch(taggerActions.updateSelectedTag(tag));
	}
});

const TagCloudContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagCloud);

export default TagCloudContainer;