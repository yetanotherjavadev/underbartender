import React, {PureComponent} from 'react';
import './style/selectorWidget.css';

class SelectorWidget extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="selectorWidget">Selector</div>
        )
    }
}

export default SelectorWidget;