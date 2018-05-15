import { PureComponent } from "react";
import * as React from "react";
import "./style/searchBox.css";

/*
	this should also be able to go to the backend to get some suggestions to search
 */
export default class SearchBox extends PureComponent<any> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		return (
			<div className="main">
				<input className="label"/>
			</div>
		);
	}
}
