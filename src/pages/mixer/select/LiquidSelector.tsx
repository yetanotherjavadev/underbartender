import * as React from "react";
import Select from "react-select";
import "./style/liquidSelector.css";

export interface LiquidSelectorStateProps {
	values: Array<Option>;
	selectedValues: Array<Option>;
}

export interface Option {
	value: string;
	label: string;
	selected?: boolean;
}

export interface LiquidSelectorActionProps {
	actions: {
		onChange: (value: Array<Option>) => void;
		onBlur: (blurred: boolean) => void;
	};
}

type Props = LiquidSelectorStateProps & LiquidSelectorActionProps;

class LiquidSelector extends React.Component<Props> {

	handleChange = (newValue: Array<Option>) => {
		this.props.actions.onChange(newValue); // TODO: change to single 
	}

	render() {
		return (
			<div className="main">
				<label htmlFor="color">
					Type anything
				</label>
				<Select
					id="color"
					options={this.props.values}
					multi={true}
					onChange={this.handleChange}
					onBlur={() => {
						window.console.log("on blur");
					}}
					value={this.props.selectedValues}
				/>
			</div>
		);
	}
}

export default LiquidSelector;
