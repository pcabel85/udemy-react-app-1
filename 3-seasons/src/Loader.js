import React from "react"

const Loader = (props) => {
    return (
        <div className='ui active dimmer'>
            <div className='ui text loader'>{props.message}</div>
        </div>
    )
}

//Place default prop values here
Loader.defaultProps = {
    message: 'Loading...'
}

export default Loader;