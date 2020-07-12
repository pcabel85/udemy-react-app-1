// Import the React and ReactDOM libraries 
import React from 'react';
import ReactDOM from 'react-dom';

let getButtonText = () => {
    return "Click on me!"
}

// Create a React component 
const App = () => {
    const styles = {
        backgroundColor: 'blue',
        color: 'white'
    }

    return (
        <div>
            <label for="name" className="label">Enter Name:</label>
            <input id="name" type="text" />
            <button style={styles}>{getButtonText()}</button>
        </div>
    )
}

//Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)