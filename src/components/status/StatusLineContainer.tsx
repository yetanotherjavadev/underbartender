import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../../state/AppState";
import FilterState from "../../state/filters/FilterState";
import { default as StatusLine, StatusLineProps } from "./StatusLine";
import FilterModel from "../../model/FilterModel";

// TODO: implement fancy text creator here
const getFilterText = (filterState: FilterState) => {
	const activeFilters = filterState.appliedFilters.filter((filter: FilterModel) => filter.isSelected);
	if (activeFilters.length > 0) {
		return activeFilters + "";
	}
	return "No filters selected";
};

const mapStateToProps = (state: AppState): StatusLineProps => {
	return {
		filterText: getFilterText(state.filterState),
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const StatusLineContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(StatusLine);

export default StatusLineContainer;