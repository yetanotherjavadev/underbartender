import { PureComponent } from "react";

import * as React from "react";
import "./style/menuBar.css";
import { Link } from "react-router-dom";

export default class BottomMenuBar extends PureComponent {

	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<ul className="wrapper">
				<li className="item"><Link to="/">Home</Link></li>
				<li className="item"><Link to="/main">Main</Link></li>
				<li className="item"><Link to="/list">A List</Link></li>
				<li className="item"><Link to="/support">Support</Link></li>
				<li className="item"><Link to="/faq">FAQ</Link></li>
				<li className="item"><Link to="/about">About</Link></li>
			</ul>
		);
	}
}