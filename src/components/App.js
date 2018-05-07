import React, {PureComponent} from 'react';
import SelectorWidget from "./Selector/SelectorWidget";

class App extends PureComponent {
    render() {
        console.log('---', 1)
        return (
            <div className="flexMain container">
                <SelectorWidget/>
            </div>
        )
    }
}

export default App