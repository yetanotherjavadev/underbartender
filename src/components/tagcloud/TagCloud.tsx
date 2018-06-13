import * as React from "react";
import { PureComponent } from "react";
import "./style/tagCloud.css";
import TagModel from "./model/TagModel";

export type TagCloudStateProps = {
	availableTags: Array<TagModel>;
	selectedTags: Array<TagModel>
};

export type TagCloudDispatchProps = {
	onTagClick(clickedTag: TagModel): void;
};

export default class TagCloud extends PureComponent<TagCloudStateProps & TagCloudDispatchProps> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		const tags = this.props.availableTags.map((tag) => {
			return (
				<div
					className={"tagWrapper " + (tag.isSelected ? "selected" : "")}
					key={tag.id}
					onClick={() => {
						this.props.onTagClick(tag);
					}}
				>
					<div className="tag">{tag.text}</div>
				</div>
			);
		});
		return (
			<div className="tagContainer">
				{tags}
			</div>
		);
	}
}