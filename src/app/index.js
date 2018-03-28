import React from "react";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";

import {Root} from "./components/Root";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Root />
            </BrowserRouter>
        )
    };
}

render(<App/>, window.document.getElementById("app"));