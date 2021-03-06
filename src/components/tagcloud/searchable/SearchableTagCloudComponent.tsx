import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../../../state/AppState";
import { FilterType } from "../../../model/FilterType";
import FilterModel from "../../../model/FilterModel";
import { filterActions } from "../../../redux/actions/FilterAction";
import SearchableTagCloud, {
	SearchableTagCloudDispatchProps,
	SearchableTagCloudStateProps
} from "./SearchableTagCloud";

interface Props {
	title: string;
	maxItemsVisible: number;
	filterType: FilterType;
}

const mapStateToProps = (state: AppState, props: Props): SearchableTagCloudStateProps => ({
	allTags: state.filterState.appliedFilters.filter((filter) => filter.filterType === props.filterType),
	title: props.title,
	maxItemsVisible: props.maxItemsVisible,
});

const mapDispatchToProps = (dispatch: Dispatch): SearchableTagCloudDispatchProps => ({
	onTagClick: (filterModel: FilterModel) => {
		window.console.log("Clicked on component tag with name: " + filterModel.value);

		filterModel.isSelected = !filterModel.isSelected;
		dispatch(filterActions.filtersChanged([filterModel]));
	},
	onClearButtonClick: (filtersToReset: Array<FilterModel>) => {
		window.console.log("cleared filter tags");
		dispatch(filterActions.filtersChanged(filtersToReset.map((filter: FilterModel) => {
			filter.isSelected = false;
			return filter;
		})));
	},
});

const SearchableTagCloudComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchableTagCloud);

export default SearchableTagCloudComponent;