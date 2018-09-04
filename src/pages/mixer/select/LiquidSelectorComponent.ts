import { AppState } from "../../../state/AppState";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
	default as LiquidSelector,
	LiquidSelectorActionProps,
	LiquidSelectorStateProps,
	Option
} from "./LiquidSelector";
import { Persistence } from "../../../model/Persistence";
import { Liquid } from "../../../model/Liquid";
import { mixerActions } from "../../../redux/actions/MixerAction";

interface Props { // own props
}

const mapStateToProps = (state: AppState, props: Props): LiquidSelectorStateProps => ({
	values: Persistence.getAllLiquids().map((c: Liquid): Option => {
		return {
			value: c.id,
			label: c.name
		};
	}),
	selectedValues: state.mixerState.selectedLiquids.map((c: Liquid): Option => {
		return {
			value: c.id,
			label: c.name
		};
	}),
});

const mapDispatchToProps = (dispatch: Dispatch): LiquidSelectorActionProps => ({
	actions: {
		onChange: (values: Array<Option>) => {
			const tmp = values.map((o: Option) => {
				return {
					id: o.value,
					name: o.label,
					strength: 0, // alc by vol in %
				density: 0, // g/ml
				sugar: 1, // % of sugar
				calories: 1, // per 100ml
				countryOfOriginId: 0,
				category: ""
				};
			});
			dispatch(mixerActions.mixerChanged(tmp));
			// window.console.log(values);
		},
		onBlur: (blurred: boolean) => {
			window.console.log("nothing happens");
		},
	}
});

const LiquidSelectorComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(LiquidSelector);

export default LiquidSelectorComponent;