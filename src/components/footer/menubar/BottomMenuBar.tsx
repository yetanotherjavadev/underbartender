import * as React from "react";
import { PureComponent } from "react";
import "./style/menuBar.css";
import { NavLink } from "react-router-dom";

export default class BottomMenuBar extends PureComponent {

	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<ul className="menuItemsList">
				<li className="item"><NavLink activeClassName="activeLink" to="/cocktails">Find one</NavLink></li>
				<li className="item"><NavLink activeClassName="activeLink" to="/support">Support</NavLink></li>
				<li className="item"><NavLink activeClassName="activeLink" to="/faq">FAQ</NavLink></li>
				<li className="item"><NavLink activeClassName="activeLink" to="/about">About</NavLink></li>
			</ul>
		);
	}
}