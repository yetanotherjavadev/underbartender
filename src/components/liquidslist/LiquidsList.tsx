import { PureComponent } from "react";
import * as React from "react";
import "./style/liquidsList.css";
import { Liquid } from "../../model/Liquid";

export type LiquidProps = {
	liquids: Array<Liquid>;
};

class LiquidsList extends PureComponent<LiquidProps> {
	constructor(props: LiquidProps) {
		super(props);
	}

	public render() {
		window.console.log(this.props.liquids);
		const listItems = this.props.liquids.map((liquid) => (
				<div className="liquidListItem" key={liquid.id}>
					<div className="liquidName" >{liquid.name}</div>
					<div className="liquidStrength" >{liquid.strength}% alc by vol</div>
					<div className="liquidSugar" >{liquid.sugar}%</div>
				</div>)
		);
		return (
			<div className="widget">
				<div className="liquidsList">
					{listItems}
				</div>
			</div>
		);
	}
}

export default LiquidsList;
