import React from "react";
import {Link} from "react-router-dom";
import Simple from "./Simple";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/user/100">User</Link></li>
                        <li><Link to="/simple">Simple</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}