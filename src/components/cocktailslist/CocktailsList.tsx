import { PureComponent } from "react";
import * as React from "react";
import "./style/cocktailList.css";
import { ListGroup } from "react-bootstrap";
import * as ListGroupItem from "react-bootstrap/lib/ListGroupItem";

export type CocktailsListProps = {
	cocktails: Array<string>;
};

export default class CocktailsList extends PureComponent<CocktailsListProps> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		const ingredients = this.props.cocktails.map((cocktailName) => (
			<ListGroupItem key={cocktailName} onClick={() => {this.clickElement(cocktailName); }}>{cocktailName}</ListGroupItem>
		));
		return (
			<ListGroup componentClass="ul" className="cocktailWidget">
				{ingredients}
			</ListGroup>
		);
	}

	// private clickElement(cocktailName: string): void = {
	// 	window.console.log(cocktailName);
	// }
	private clickElement(cocktailName: string): void {
		window.console.log(cocktailName);
	}
}