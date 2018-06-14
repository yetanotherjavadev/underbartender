import { connect } from "react-redux";
import { Dispatch } from "redux";
import TagCloud, { TagCloudDispatchProps, TagCloudStateProps } from "./simple/SimpleTagCloud";
import TagModel from "./model/TagModel";
import { AppState } from "../../state/AppState";
import { Persistence } from "../../model/Persistence";
import FilterModel from "../../model/FilterModel";
import { FilterType } from "../../model/FilterType";
import { taggerAction } from "../../redux/actions/TaggerAction";

const mapStateToProps = (state: AppState, props: {title: string}): TagCloudStateProps => ({
		tags: state.countriesTagCloudState.tags || Persistence.getAllCountries().map((country) => (
			new TagModel(new FilterModel(country.id, country.name, FilterType.COUNTRY)))),
		title: props.title
	});

const mapDispatchToProps = (dispatch: Dispatch): TagCloudDispatchProps => ({
	onTagClick: (tag: TagModel) => {
		window.console.log("Clicked on country tag with name: " + tag.filter.text);
		tag.isSelected = !tag.isSelected;

		dispatch(taggerAction.updateSelectedTag(tag));
	}
});

const CountriesTagCloud = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagCloud);

export default CountriesTagCloud;