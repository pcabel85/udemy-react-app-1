import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        
       this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Image Search</label>
                    {/* Dont add () when function is acting as a callback handler for user interaction, such as onChange */}
                    <input 
                        className="field" 
                        type="text" 
                        value={this.state.term}
                        onChange={ e => this.setState({ term: e.target.value }) }
                    /> 
                </form>
            </div>
        )
    }
}

export default SearchBar;
