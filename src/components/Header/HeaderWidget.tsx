import { PureComponent } from "react";
import * as React from "react";
import "./style/header.css";

class HeaderWidget extends PureComponent {
	public render() {
		const appName = "UB";
		return (
			<div className="headerPanel">
				<div className="titleLabel">{appName}</div>
			</div>
		);
	}
}

export default HeaderWidget;