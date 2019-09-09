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
            console.log(game.backgroundImage);
            return (
                <div style={{backgroundImage:`url(${game.backgroundImage})`}} key={index + game.title} className="gamebox">
                    <div className="infoBox gameColor">
                    <Name index={index + game.title} title={game.title} />
                    <Date index={index + game.date} date={game.date} url={game.backgroundImage}/>
                    {/* <Platform index={index} platforms={game.platforms} /> */}
                    <button className="addFavButton" onClick={() => this.props.addFavorite(game)}>Add Favorite</button>
                    </div>
                </div>)
        })
    }

    render() {
        return (
            <div className="display">
                {this.props.isLoading ?  <h2 className="loading"><i className="fa fa-spinner fa-spin loading"></i>Loading</h2>:
                this.displaySearchResults(this.props.displayArr)
                }
            </div>
        )
    }
}

export default Gamebox;