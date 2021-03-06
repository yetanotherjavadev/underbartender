import * as React from "react";
import { PureComponent } from "react";
import "./style/cocktailList.css";
import { ListGroup } from "react-bootstrap";
import * as ListGroupItem from "react-bootstrap/lib/ListGroupItem";
import { Persistence } from "../../model/Persistence";

export type CocktailsListStateProps = {
	cocktails: Array<number>;
	selectedItemId: number;
};

export type CocktailsListDispatchProps = {
	actions: {
		changeSelectedItem(clickedItemId: number): void;
	}
};

export type CocktailListProps = CocktailsListStateProps & CocktailsListDispatchProps;

export default class CocktailsList extends PureComponent<CocktailListProps> {
	constructor(props: any) {
		super(props);
	}

	itemActive(id: number) {
		return id === this.props.selectedItemId;
	}

	public render() {
		const cocktails = this.props.cocktails.map((cocktailId) => {
			const cocktail = Persistence.getRecipeById(cocktailId);
			return (
				<ListGroupItem
					active={this.itemActive(cocktail.id)}
					key={cocktailId}
					onClick={() => {
						this.props.actions.changeSelectedItem(cocktail.id);
					}}
				>{cocktail.name}
				</ListGroupItem>
			);
		});
		if (cocktails.length !== 0) {
			return (
				<ListGroup componentClass="ul" className="cocktailsList">
					{cocktails}
				</ListGroup>
			);
		} else {
			return (
				<div className="noDataWidget">No data found for selected filter set</div>
			);
		}
	}
}