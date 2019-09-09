import React, {Component} from 'react';

class Favorite extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {title, id} = this.props.game;

        return (
            <div className="favoritesList">
                <li>{title}</li>
                <button className="reem favButtonRemove" onClick={() => this.props.removeFavorite(id)}>Remove</button>
            </div>
        )
    }
}

export default Favorite;