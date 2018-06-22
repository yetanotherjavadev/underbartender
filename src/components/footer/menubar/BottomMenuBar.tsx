import * as React from "react";
import { PureComponent } from "react";
import "./style/menuBar.css";
import { Link } from "react-router-dom";

export default class BottomMenuBar extends PureComponent {

	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<ul className="menuItemsList">
				<li className="item"><Link to="/cocktails">Find one</Link></li>
				<li className="item"><Link to="/support">Support</Link></li>
				<li className="item"><Link to="/cocktails/6">Cocktail #6</Link></li>
				<li className="item"><Link to="/cocktails/4">Cocktail #4</Link></li>
				<li className="item"><Link to="/faq">FAQ</Link></li>
				<li className="item"><Link to="/about">About</Link></li>
			</ul>
		);
	}
}