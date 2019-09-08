import React, {Component} from 'react';

class Favorite extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <button onClick={this.props.addFavorite(this.props.game)}>Add to Favorites</button>
        )
    }
}

export default Favorite;