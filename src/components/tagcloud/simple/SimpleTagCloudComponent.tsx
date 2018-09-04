import { connect } from "react-redux";
import { Dispatch } from "redux";
import SimpleTagCloud, { SimpleTagCloudDispatchProps, SimpleTagCloudStateProps } from "./SimpleTagCloud";
import { AppState } from "../../../state/AppState";
import { FilterType } from "../../../model/FilterType";
import FilterModel from "../../../model/FilterModel";
import { filterActions } from "../../../redux/actions/FilterAction";

interface Props {
	title: string;
	filterType: FilterType;
}

const mapStateToProps = (state: AppState, props: Props): SimpleTagCloudStateProps => ({
	tags: state.filterState.appliedFilters.filter((filter) => filter.filterType === props.filterType),
	title: props.title,
});

const mapDispatchToProps = (dispatch: Dispatch): SimpleTagCloudDispatchProps => ({
	actions: {
		onTagClick: (filterModel: FilterModel) => {
			window.console.log("Clicked on component tag with name: " + filterModel.value);
			filterModel.isSelected = !filterModel.isSelected;
			dispatch(filterActions.filtersChanged([filterModel]));
		}
	}
});

const SimpleTagCloudComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(SimpleTagCloud);

export default SimpleTagCloudComponent;