import React, { Component } from 'react';
import Date from './gameBox/date';
import Name from './gameBox/name';
import Platform from './gameBox/platform';
import Screenshots from './gameBox/screenshots';
import Studio from './gameBox/studio';

class Gamebox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newArr: this.props.displayArr
        }
    }

    displaySearchResults(results) {
        // For each game, access the information
        return results.map((game, index) => {
            return (
                <div key={index + game.title} className="gamebox">
                    <Name index={index + game.title} title={game.title} />
                    <Date index={index + game.date} date={game.date} />
                    {/* <Platform index={index} platforms={game.platforms} /> */}
                    <button onClick={() => this.props.addFavorite(game)}>Add to Favorites</button>
                </div>)
        })
    }

    render() {
        return (
            <div className="display">
                {this.props.displayArr.length > 0 ? this.displaySearchResults(this.props.displayArr) : console.log("Loading")}
            </div>
        )
    }
}

export default Gamebox;