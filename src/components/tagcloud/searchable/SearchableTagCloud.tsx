import * as React from "react";
import "./style/searchableTagCloud.css";
import FilterModel from "../../../model/FilterModel";

export type SearchableTagCloudStateProps = {
	allTags: Array<FilterModel>,
	title: string
	maxItemsVisible: number;
};

export type SearchableTagCloudDispatchProps = {
	onTagClick(clickedTag: FilterModel): void;
};

type SearchableTagCloudProps = SearchableTagCloudStateProps & SearchableTagCloudDispatchProps;

interface SearchableTagCloudState {
	filterString: string;
}

export default class SearchableTagCloud extends React.Component<SearchableTagCloudProps, SearchableTagCloudState> {

	constructor(props: any) {
		super(props);
		this.state = {filterString: ""};
	}

	handleFilterChange(e: any) {
		this.setState({
			filterString: e.target.value
		});
	}

	public render() {
		const tags = this.props.allTags.filter((filter) => (filter.value.toUpperCase().startsWith(this.state.filterString.toUpperCase())))
			.map((filter) => {
			return (
				<div
					className={"tagWrapper " + (filter.isSelected ? "selected" : "")}
					key={filter.id}
					onClick={() => {
						this.props.onTagClick(filter);
					}}
				>
					<div className="tag">{filter.value}</div>
				</div>
			);
		});
		return (
			<div className="searchableTagCloud">
				<div className="titleContainer">{this.props.title}</div>
				<input type="search" value={this.state.filterString} className="searchInput" onChange={e => this.handleFilterChange(e)}/>
				<div className="tagContainer">
					{tags}
				</div>
			</div>
		);
	}
}