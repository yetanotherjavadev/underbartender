import * as React from "react";
import { PureComponent } from "react";
import "./style/statusLine.css";

export type StatusLineProps = {
	filterText: string;
};

export default class StatusLine extends PureComponent<StatusLineProps> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		return (
			<div className="statusLine">{this.props.filterText}</div>
		);
	}
}