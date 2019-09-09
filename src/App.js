import React, { Component } from 'react';
import axios from 'axios';
import Gamebox from './components/gamebox';
import Search from './components/search';
import Favorite from './components/favorite';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchResults: [],
      favoritesList: [],
      newSearch: "",
      devConnect: true,
      loadingAPI: false
    }

    this.searchResults = this.searchResults.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  }

  // Call the Server, and ask it to call RAWG for the data
  searchResults(search) {
    this.setState({ loadingAPI: true })
    axios.get(`/api/games/${search}`).then(res => {
      this.setState({ searchResults: res.data, loadingAPI: false })
    })
  }

  deleteResults() {
    axios.delete(`/api/games/`).then(res => {
      this.setState({ searchResults: []})
    })
  }

  addFavorite(game) {
    axios.post(`/api/games/favorite`, game).then(res => {
      this.setState({ favoritesList: res.data })
    })
  }

  removeFavorite(id) {
    axios.put(`/api/games/favorite/${id}`).then(res => {
      this.setState({ favoritesList: res.data })
    })
  }

  toggleMock() {
    axios.put('/api/games/connected').then(res => {
      this.setState({ devConnect: res.data })
    })
  }

  clearFavorites() {
    axios.delete(`/api/games/favorite`).then(res => {
      this.setState({ favoritesList: res.data })
    })
  }

  renderFavorites() {
    const { favoritesList } = this.state;
    let favArr = favoritesList.map((game, index) => <Favorite removeFavorite={this.removeFavorite} game={game} />)
    return favArr;
  }

  render() {
    return (
      <div className="App">
        <div className="left">
          <header className="heading">
            <div id="connectStatus">
              <h1 className="logo reem toggleConnect" onClick={() => this.toggleMock()}>EGREGIOUS GAMES</h1>
              {this.state.devConnect ? <h3 className="logo reem">Connected!</h3> : <h3 className="logo reem">Tested!</h3>}
            </div>
            <Search searchResults={this.searchResults} />
          </header>
          <Gamebox isLoading={this.state.loadingAPI} displayArr={this.state.searchResults} addFavorite={this.addFavorite} />
        </div>
        <div className="right">
          <div id="renderFavorites">
            {this.renderFavorites()}
          </div>
          
          <div id="clearFavorites">
            <button className="reem clearAllFavorites" onClick={() => this.clearFavorites()}>Clear</button>
            <button className="reem clearAllFavorites" onClick={() => this.deleteResults()}>Clear Results</button>
          </div>
        </div>
      </div>
    )
  }

}
export default App;
