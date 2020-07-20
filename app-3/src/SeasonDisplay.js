import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
       return lat > 0 ? 'summer' : 'winter';
    } else {
       return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    //Destructuring the seasonConfig object to use dynamic season
    const {text, iconName} = seasonConfig[season];
    
    return (
        // Use backticks to use a JS variable within a JSX attribute
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon massive icon-right`} />
        </div>
    )    
}

export default SeasonDisplay;