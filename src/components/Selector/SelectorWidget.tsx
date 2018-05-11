import { PureComponent } from "react";
import * as React from "react";
import "./style/selectorWidget.css";
import { Liquid } from "../../model/Liquid";

export type LiquidProps = {
	liquids: Array<Liquid>;
};

class SelectorWidget extends PureComponent<LiquidProps> {
	constructor(props: LiquidProps) {
		super(props);
	}
	public render() {
		return (
			<div className="selectorWidget">Selector</div>
		);
	}
}

export default SelectorWidget;