import { PureComponent } from "react";

import * as React from "react";
import "./style/menuBar.css";

export default class BottomMenuBar extends PureComponent {

	constructor(props: any) {
		super(props);
	}

	render() {
		const menuItems = ["MenuItem1", "MenuItem2", "MenuItem3", "MenuItem4", "MenuItem5"];

		const listItems = menuItems.map((item) => (<li key={item} className="item">{item}</li>));

		return (
			<ul className="wrapper">
				{listItems}
			</ul>);
	}
}