import * as React from "react";
import { PureComponent } from "react";
import "./style/liquidsList.css";

export type Items = {
	items: Array<number>;
};

export default class ListBox extends PureComponent<Items> {
	constructor(props: Items) {
		super(props);
	}

	public render() {
		const listItems = this.props.items.map((item) =>
			(<div className="listItem" key={item}/>));

		return (
			<div className="listbox">
				{listItems}
			</div>
		);
	}
}