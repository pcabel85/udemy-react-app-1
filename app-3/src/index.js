import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

//Converted App from a functional component to a Class based component to
//take advantage of React.Component's built in methods.
class App extends React.Component {
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)  
        )
        return <div>Latitude</div>
    }
}

 ReactDOM.render(<App />, document.querySelector("#root"))