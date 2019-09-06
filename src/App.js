import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchResults: []
    }

    this.searchResults = this.searchResults.bind(this);
  }

  searchResults(search) {
    let newResults = axios.get(`/api/games/${search}`).then(res => {
      this.setState({searchResults: res.data})
      console.log(newResults)
    })

    
    // return newResults
  }

  render(){
  return (
    <div className="App">
      {this.searchResults('Control')};
    </div>
  )
  }
}

export default App;
