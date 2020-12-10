import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    updateSearchTerm = event => {
        this.setState({term: event.target.value});
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label>Video Search</label>
                    <input type="text" value={this.state.term} onChange={this.updateSearchTerm}/>
                </form>
            </div>
        );
    }
}

export default SearchBar;