import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        console.log("Constructor")
    }

    componentWillMount(){
        console.log("component Will Mount")
    }

    componentDidMount(){
        console.log("component Did Mount")
    }

    componentWillReceiveProps(nextProps){
        console.log("component Will Receive Props", nextProps)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("should Component Update", nextProps, nextState);
        return true
    }

    componentWillUpdate(nextProps, nextState){
        console.log("component Will Update", nextProps, nextState);
    }

    componentDidUPdate(prevProps, prevState){
        console.log("component Did UPdate", prevProps, prevState);
    }

    componentWillUnmount(){
        console.log("component Will Unmount");
    }


    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        });
        console.log("add +3 ", this.state.age)
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        })
    }

    render() {
        return (
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name}, age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <p>User oojects => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make older</button>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make older 2</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-success">Greet</button>
                <hr/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-success">Change Header Link</button>
                <hr/>
                <input type="text" value={this.state.homeLink}
                       onChange={(event) =>this.onHandleChange(event)}/>
            </div>
        )
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
};