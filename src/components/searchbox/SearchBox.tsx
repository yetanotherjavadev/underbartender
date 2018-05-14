import { PureComponent } from "react";
import * as React from "react";

class SearchBox extends PureComponent<any> {
	constructor(props: any) {
		super(props);
	}

	public render() {
		return (
				<div className="main">
					<input className="label"/>
				</div>
		);
	}
}

export default SearchBox;
