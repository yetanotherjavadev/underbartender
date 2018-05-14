import { PureComponent } from "react";
import * as React from "react";
import "./style/menu.css";

export default class Menu extends PureComponent<any> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		return (
			<div className="menuRibbon"/>
		);
	}
}
