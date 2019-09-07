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
        console.log(this.state.newSearch)
    }

    // Search for Game
    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.handleChange(e.target.value)} />
                <button onClick={() => this.props.searchResults(this.state.newSearch)}>Submti!</button>
            </div>
        )
    }
}

export default Search;