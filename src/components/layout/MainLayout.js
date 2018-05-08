import React, {PureComponent} from 'react';
import SelectorWidget from "../Selector/SelectorWidget";
import './style/mainLayout.css';
import HeaderWidget from "../Header/HeaderWidget";

class MainLayout extends PureComponent {
    render() {
        return (
            <div className="mainLayout">
                <div className="topPanel">
                    <HeaderWidget/>
                </div>
                <div className="workingArea">
                    <div className="leftPanel"/>
                    <div className="centralPanel">
                        <SelectorWidget/>
                    </div>
                    <div className="rightPanel"/>
                </div>
                <div className="bottomPanel">
                    <HeaderWidget/>
                </div>
            </div>
        )
    }
}

export default MainLayout;