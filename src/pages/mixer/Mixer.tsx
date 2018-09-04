import * as React from "react";
import LiquidSelectorComponent from "./select/LiquidSelectorComponent";
import "./style/mixer.css";

class Mixer extends React.Component<any> {

	constructor(Props: any) {
		super(Props);
	}

	render() {
		return (
			<div className="mixerMain">
				<LiquidSelectorComponent/>
			</div>
		);
	}
}

export default Mixer;