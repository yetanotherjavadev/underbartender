import { PureComponent } from "react";
import * as React from "react";
import "./style/header.css";

class HeaderWidget extends PureComponent {
	public render() {
		return (
			<div className="headerPanel">
				<div className="titleLabel">Underbartender</div>
			</div>
		);
	}
}

export default HeaderWidget;