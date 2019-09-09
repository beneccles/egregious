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
    }

    this.searchResults = this.searchResults.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  }

  // Call the Server, and ask it to call RAWG for the data
  searchResults(search) {
    axios.get(`/api/games/${search}`).then(res => {
      this.setState({ searchResults: res.data })
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

  clearFavorites() {
    axios.delete(`/api/games/favorite`).then(res => {
      this.setState({ favoritesList: res.data })
    })
  }

  renderFavorites() {
    const { favoritesList } = this.state;
    let favArr = favoritesList.map((game, index) => <Favorite removeFavorite={this.removeFavorite} game={game}/>)
    
    // return (
    //   // Map the favorites list with HTML for display
    //   <list className="favoritesBox">
    //     {favoritesList.map((game, index) => {
    //       console.log(typeof game.title)
    //       return <h1>{game.title} </h1>
    //     })}
    //   </list>
    // )

    return favArr;
  }


  render() {
    return (
      <div className="App">
        <div className="left">
          <Search searchResults={this.searchResults} />
          <Gamebox displayArr={this.state.searchResults} addFavorite={this.addFavorite} />
        </div>
        <div className="right">
        {this.renderFavorites()}
        <button onClick={() => this.clearFavorites() }>Clear</button>
        </div>
      </div>
    )
  }

}
export default App;
