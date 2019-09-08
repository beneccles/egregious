import React, { Component } from 'react';
import Date from './gameBox/date';
import Description from './gameBox/description';
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
        this.rendDisplay = this.rendDisplay.bind(this);
    }

    displaySearchResults(results) {
        // For each game, access the information
        return results.map((game, index) => <Name index={index + game.title} title={game.title} />)
    }

    rendDisplay() {
        // Here is where we build the "drop box" for each game.
        // We pass each object property from the data into seperate components,
        // which in turn will parse the property and return it in html.
        // This allows us to format the dropbox here before sending out for display.
        return (
            //The prop is displayArr
            <div className="gamebox">
                <div className="left">
                    {this.props.displayArr.length > 0 ? this.displaySearchResults(this.props.displayArr) : "Loading"}
                    {/* <Name title={this.props.displayArr}/> */}
                    {/* console.log(this.props.displayArr.title) */}
                    {/* <Studio studio={this.props.displayArr.studio}/>
                    <Date date={this.props.displayArr.date}/>
                    <Platform platforms={this.props.displayArr.platforms}/> */}
                </div>
                {/* <div className="right">
                    <Screenshots screenshots={this.props.displayArr.screenshots}/>
                    <Description description={this.props.displayArr.description}/>
                </div> */}
            </div>
        )
    }

    render() {
        return (
            <div className="display">
                {this.rendDisplay()}
            </div>
        )
    }
}

export default Gamebox;