import React, {Component} from 'react';
import axios from 'axios';
import Gamebox from './components/gamebox';
import Search from './components/search';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchResults: [],
      newSearch: ""
    }

    this.searchResults = this.searchResults.bind(this);
  }

  // Call the Server, and ask it to call RAWG for the data
  searchResults(search) {
    let newResults = axios.get(`/api/games/${search}`).then(res => {
      this.setState({searchResults: res.data})
    })

    
    return newResults
  }


  render(){
  return (
    <div className="App">
      <Search searchResults={this.searchResults}/>
      <Gamebox displayArr={this.state.searchResults} />
      {/* {this.searchResults('Control')}; */}
    </div>
  )
  }
}

export default App;
