import React, {PureComponent} from 'react';
import './style/header.css'

class HeaderWidget extends PureComponent {
    render() {
        return (
            <div className="headerPanel">
                <div className="titleLabel">Underbartender</div>
            </div>
        )
    }
}

export default HeaderWidget;