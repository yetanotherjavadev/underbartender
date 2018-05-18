import * as React from "react";
import { PureComponent } from "react";
import "./style/cocktailList.css";
import { ListGroup } from "react-bootstrap";
import * as ListGroupItem from "react-bootstrap/lib/ListGroupItem";
import { Persistence } from "../../model/Persistence";

export type CocktailsListStateProps = {
	cocktails: Array<number>;
};

export type CocktailsListDispatchProps = {
	onClick(clickedItemId: number): void;
};

export default class CocktailsList extends PureComponent<CocktailsListStateProps & CocktailsListDispatchProps> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		const ingredients = this.props.cocktails.map((cocktailId) => {
			const cocktail = Persistence.getRecipeById(cocktailId);
			return (
				<ListGroupItem
					key={cocktailId}
					onClick={() => {
						this.props.onClick(cocktail.id);
					}}
				>{cocktail.name}
				</ListGroupItem>
			);
		});
		return (
			<ListGroup componentClass="ul" className="cocktailWidget">
				{ingredients}
			</ListGroup>
		);
	}
}