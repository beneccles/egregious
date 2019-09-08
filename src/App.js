import React, { Component } from 'react';
import axios from 'axios';
import Gamebox from './components/gamebox';
import Search from './components/search';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchResults: [],
      favoritesList: [],
      newSearch: "",
    }

    this.searchResults = this.searchResults.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }

  // Call the Server, and ask it to call RAWG for the data
  searchResults(search) {
    axios.get(`/api/games/${search}`).then(res => {
      this.setState({ searchResults: res.data })
    })
  }

  addFavorite() {
    axios.post(`/api/games/`).then(res => {
      this.setState({ favoritesList: res.data })
      console.log("Running favorites", this.state.favoritesList);
    })
  }

  renderFavorites() {
    const { favoritesList } = this.state;
    return (
      // Map the favorites list with HTML for display
      <div className="favoritesBox">
        {favoritesList.map((game, index) => <li>{game.title}</li>)}
      </div>
    )
  }


  render() {
    return (
      <div className="App">
        <div className="left">
          <Search searchResults={this.searchResults} />
          <Gamebox displayArr={this.state.searchResults} addFavorite={this.addFavorite} />
        </div>
        {this.renderFavorites()}
      </div>
    )
  }

}
export default App;
