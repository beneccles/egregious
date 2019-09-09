import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newSearch: ''
        }

    }

    handleChange(e) {
        this.setState({ newSearch: e })
    }

    // Search for Game
    render() {
        return (
            <div id="searchBar">
                <input id="inputSearch" className="reem" type="text" placeholder="   Search Games" onChange={(e) => this.handleChange(e.target.value)} />
                <button id="submitSearch" className="reem toggleConnect" onClick={() => this.props.searchResults(this.state.newSearch)}>Submit!</button>
            </div>
        )
    }
}

export default Search;