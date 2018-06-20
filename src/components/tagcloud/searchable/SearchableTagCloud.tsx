import * as React from "react";
import { PureComponent } from "react";
import "./style/searchableTagCloud.css";
import SearchBox from "../../searchbox/SearchBox";
import FilterModel from "../../../model/FilterModel";

export type SearchableTagCloudStateProps = {
	tags: Array<FilterModel>,
	title: string
	maxItemsVisible: number;
	// filterString: string;
};

export type SearchableTagCloudDispatchProps = {
	onTagClick(clickedTag: FilterModel): void;
};

type SearchableTagCloudProps = SearchableTagCloudStateProps & SearchableTagCloudDispatchProps;

export default class SearchableTagCloud extends PureComponent<SearchableTagCloudProps> {

	constructor(props: any) {
		super(props);
	}

	public render() {
		const tags = this.props.tags.map((filter) => {
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
				<SearchBox/>
				<div className="tagContainer">
					{tags}
				</div>
			</div>
		);
	}
}