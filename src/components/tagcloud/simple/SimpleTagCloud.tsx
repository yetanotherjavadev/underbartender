import * as React from "react";
import { PureComponent } from "react";
import "./style/simpleTagCloud.css";
import FilterModel from "../../../model/FilterModel";

export type SimpleTagCloudStateProps = {
	tags: Array<FilterModel>,
	title: string,
};

export type SimpleTagCloudDispatchProps = {
	onTagClick(clickedTag: FilterModel): void;
};

export type SimpleTagCloudProps = SimpleTagCloudStateProps & SimpleTagCloudDispatchProps;

export default class SimpleTagCloud extends PureComponent<SimpleTagCloudProps> {

	constructor(props: any) {
		super(props);
	}

	public render() {
		const tags = this.props.tags.map((filter: FilterModel) => {
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
			<div className="simpleTagCloud">
				<div className="titleContainer">{this.props.title}</div>
				<div className="tagContainer">
					{tags}
				</div>
			</div>
		);
	}
}