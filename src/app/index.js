import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        }
    }

    onGreat() {
        alert("Hello!!!");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }

    render() {
        let user = {
            name: "Anna",
            hobbies: ["Sports", "Reading"]
        };

        let homeCmp = "";
        if (this.state.homeMounted) {
            homeCmp = (
                <Home
                    name={"Max"}
                    initialAge={27}
                    user={user}
                    greet={this.onGreat}
                    changeLink={this.onChangeLinkName.bind(this)}
                    initialLinkName={this.state.homeLink}
                >
                    <p>Some Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae
                        blanditiis
                        dolorum exercitationem explicabo facilis fugiat hic iste labore maxime minus
                        molestiae
                        neque quasi, sint soluta tenetur unde velit voluptas.</p>
                </Home>
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount</button>
                    </div>
                </div>
            </div>
        )
    };
};

render(<App/>, window.document.getElementById("app"));