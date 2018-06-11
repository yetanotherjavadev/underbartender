import { connect } from "react-redux";
import { Persistence } from "../../model/Persistence";
import { Dispatch } from "redux";
import { AppState } from "../../state/AppState";
import TagCloud, { TagCloudDispatchProps, TagCloudStateProps } from "./TagCloud";
import TagModel from "./model/TagModel";

const mapStateToProps = (state: AppState): TagCloudStateProps => ({
		selectedTags: [],
		clickableTags: false,
		tags: Persistence.getAllLiquids().map((liquid) => new TagModel(liquid.name, liquid.id)),
	})
;

const mapDispatchToProps = (dispatch: Dispatch): TagCloudDispatchProps => ({
	onTagClick: (id: number) => {
		window.console.log("Clicked on tag with id: " + id);
		// selectedTags.push(id);
		// dispatch(changeSelectedItem(id));
	}
});

const TagCloudContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagCloud);

export default TagCloudContainer;