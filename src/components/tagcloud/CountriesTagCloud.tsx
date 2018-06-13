import { connect } from "react-redux";
import { Dispatch } from "redux";
import TagCloud, { TagCloudDispatchProps, TagCloudStateProps } from "./simple/SimpleTagCloud";
import TagModel from "./model/TagModel";
import { Persistence } from "../../model/Persistence";
import { AppState } from "../../state/AppState";

const mapStateToProps = (state: AppState, props: {title: string}): TagCloudStateProps => ({
		selectedTags: state.componentsTagCloudState.selectedTags,
		availableTags: Persistence.getAllCountries().map((country) => (new TagModel(country.name, country.id))),
		title: props.title
	});

const mapDispatchToProps = (dispatch: Dispatch): TagCloudDispatchProps => ({
	onTagClick: (tag: TagModel) => {
		window.console.log("Clicked on country tag with name: " + tag.text);
		tag.isSelected = !tag.isSelected;
		// dispatch(taggerActions.updateSelectedTag(tag));
	}
});

const CountriesTagCloud = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagCloud);

export default CountriesTagCloud;