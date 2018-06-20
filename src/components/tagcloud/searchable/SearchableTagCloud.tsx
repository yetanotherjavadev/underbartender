import * as React from "react";
import { PureComponent } from "react";
import "./style/searchable.css";
import TagModel from "../model/TagModel";
import SearchBox from "../../searchbox/SearchBox";

export type SearchableTagCloudStateProps = {
	tags: Array<TagModel>,
	title: string
};

export type SearchableTagCloudDispatchProps = {
	onTagClick(clickedTag: TagModel): void;
};

export default class SearchableTagCloud extends PureComponent<SearchableTagCloudStateProps & SearchableTagCloudDispatchProps> {

	constructor(props: any) {
		super(props);
	}

	public render() {
		const tags = this.props.tags.map((tag) => {
			return (
				<div
					className={"tagWrapper " + (tag.isSelected ? "selected" : "")}
					key={tag.filter.id}
					onClick={() => {
						this.props.onTagClick(tag);
					}}
				>
					<div className="tag">{tag.filter.value}</div>
				</div>
			);
		});
		return (
			<div>
				<div className="titleContainer">{this.props.title}</div>
				<SearchBox/>
				<div className="tagContainer">
					{tags}
				</div>
			</div>
		);
	}
}