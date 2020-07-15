import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

//Converted App from a functional component to a Class based component to
//take advantage of React.Component's built in methods.
class App extends React.Component {
    constructor(props) { //First function called when component is init'd 
        super(props);    //Passes in parent's (React.Component) constructor function   

        this.state = {
            lat: null
        };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // Called setState to update our component!!!
                this.setState({ lat: position.coords.latitude })
            },
            (err) => console.log(err)  
        )
    }

    //We always have to define render()!!!
    render(){
        return <div>Latitude: {this.state.lat}</div>
    }
}

 ReactDOM.render(<App />, document.querySelector("#root"))