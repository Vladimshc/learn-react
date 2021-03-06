import React from "react";
import {Route, Switch} from "react-router-dom";

import {Header} from "./Header";
import {Home} from "./Home";
import {User} from "./User";
import Simple from "./Simple";

export class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/user/:id' component={User}/>
                            <Route path='/home' component={Home}/>
                            <Route path='/simple' component={Simple}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}