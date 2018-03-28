import React from "react";
import {Link} from "react-router-dom";


export class User extends React.Component {
    constructor(props){
        super(props);
        console.log("props ", props);
    }

    componentDidMount(){
        console.log("this.props ", this.props);
        console.log("this.props.match ", this.props.match.params);
    }


    render() {
        return (
            <div>
                <h3>User ID: {this.props.match.params.id}</h3>
                <h3>The user page</h3>
                <Link to="/home"><button className="btn btn-primary">Go Home!</button></Link>
            </div>
        )
    }
}
