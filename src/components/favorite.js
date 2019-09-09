import React, {Component} from 'react';

class Favorite extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {title, id} = this.props.game;

        return (
            <div>
                <h1>{title}</h1>
                <button onClick={() => this.props.removeFavorite(id)}>Remove</button>
            </div>
        )
    }
}

export default Favorite;