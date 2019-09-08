import React, { Component } from 'react';
import Date from './gameBox/date';
import Description from './gameBox/description';
import Name from './gameBox/name';
import Platform from './gameBox/platform';
import Screenshots from './gameBox/screenshots';
import Studio from './gameBox/studio';
import Favorite from './favorite';

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
                    {/* <Studio index={index + game.studio} studio={game.studio} /> */}
                    <Date index={index + game.date} date={game.date} />
                    {/* <Platform index={index} platforms={game.platforms} /> */}
                    <Favorite game={game} addFavorite={this.props.addFavorite}/>
                </div>)
        })
    }

    render() {
        return (
            <div className="display">
                {this.props.displayArr.length > 0 ? this.displaySearchResults(this.props.displayArr) : "Loading"}
            </div>
        )
    }
}

export default Gamebox;