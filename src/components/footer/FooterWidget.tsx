import { PureComponent } from "react";
import * as React from "react";
import "./style/footerWidget.css";
import MenuBar from "./menubar/BottomMenuBar";

export default class FooterWidget extends PureComponent {

	render() {
		return (
			<div className="footerPanel">
				<MenuBar/>
			</div>
		);
	}
}