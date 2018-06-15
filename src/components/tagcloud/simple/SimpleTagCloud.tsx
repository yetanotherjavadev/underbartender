import * as React from "react";
import { PureComponent } from "react";
import "./style/simpleTagCloud.css";
import TagModel from "../model/TagModel";

export type SimpleTagCloudStateProps = {
	tags: Array<TagModel>,
	title: string
};

export type SimpleTagCloudDispatchProps = {
	onTagClick(clickedTag: TagModel): void;
};

export default class SimpleTagCloud extends PureComponent<SimpleTagCloudStateProps & SimpleTagCloudDispatchProps> {

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
					<div className="tag">{tag.filter.text}</div>
				</div>
			);
		});
		return (
			<div>
				<div className="titleContainer">{this.props.title}</div>
				<div className="tagContainer">
					{tags}
				</div>
			</div>
		);
	}
}