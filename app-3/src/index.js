import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

//Converted App from a functional component to a Class based component to
//take advantage of React.Component's built in methods.
class App extends React.Component {
    constructor(props) { //First function called when component is init'd 
        super(props);    //Passes in parent's (React.Component) constructor function   

        // Set default properites for state
        this.state = {
            lat: null,
            errorMsg: ''
        };
    }

    // Use DidMount for data loading
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // Called setState to update our component!!!
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                this.setState({ errorMsg: err.message })
            }  
        )
    }

    //We always have to define render()!!!
    render(){
        if (this.state.errorMsg && !this.state.lat ){
            return <div>Error: { this.state.errorMsg }</div>
        }
        if (this.state.lat && !this.state.errorMsg ){
            return <div>Latitude: { this.state.lat }</div>
        }
        return <div>Loading...</div>
    }
}

 ReactDOM.render(<App />, document.querySelector("#root"))