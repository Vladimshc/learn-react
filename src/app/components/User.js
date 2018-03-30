import React from "react";
import {Link} from "react-router-dom";


export class User extends React.Component {
    constructor(props){
        super(props);
        console.log("props ", props);

        this.submitRecipe = this.submitRecipe.bind(this)
    }

    componentDidMount(){
        console.log("this.props ", this.props);
        console.log("this.props.match.params ", this.props.match.params);
    }

    submitRecipe(){
        console.log("Button click");
        this.props.history.push('/');
    }


    render() {
        return (
            <div>
                <h3>User ID: {this.props.match.params.id}</h3>
                <h3>The user page</h3>
                <Link to="/home"><button className="btn btn-primary">Go Home!</button></Link>
                <button onClick={this.submitRecipe} className="btn btn-primary">Go Home button!</button>
            </div>
        )
    }
}
