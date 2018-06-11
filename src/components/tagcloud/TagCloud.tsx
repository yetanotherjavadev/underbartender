import * as React from "react";
import { PureComponent } from "react";
import "./style/cocktailList.css";
import TagModel from "./model/TagModel";

export type TagCloudStateProps = {
	tags: Array<TagModel>;
	selectedTags: Array<TagModel>;
	clickableTags: boolean;
};

export type TagCloudDispatchProps = {
	onTagClick(clickedTagId: number): void;
};

export default class TagCloud extends PureComponent<TagCloudStateProps & TagCloudDispatchProps> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		const tags = this.props.tags.map((tag) => {
			return (
				<div
					className="tagWrapper"
					key={tag.id}
					onClick={() => {
						this.props.onTagClick(tag.id);
					}}
				>
					<div className="tag">{"#" + tag.id}</div>
					{this.props.clickableTags && <div className="removeTagCross">X</div>}
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