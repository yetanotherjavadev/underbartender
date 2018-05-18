import * as React from "react";
import { PureComponent } from "react";
import "./style/cocktailList.css";
import { ListGroup } from "react-bootstrap";
import * as ListGroupItem from "react-bootstrap/lib/ListGroupItem";

export type CocktailsListStateProps = {
	cocktails: Array<string>;
};

export type CocktailsListDispatchProps = {
	onClick(clickedItem: string): void;
};

export default class CocktailsList extends PureComponent<CocktailsListStateProps & CocktailsListDispatchProps> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		const ingredients = this.props.cocktails.map((cocktailName) => (
			<ListGroupItem
				key={cocktailName}
				onClick={() => {
					this.props.onClick(cocktailName);
				}}
			>{cocktailName}
			</ListGroupItem>
		));
		return (
			<ListGroup componentClass="ul" className="cocktailWidget">
				{ingredients}
			</ListGroup>
		);
	}
}