import React, {Component} from 'react';

class Date extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="date">
                <p className="releaseDate gameBoxText">{this.props.date}</p>
            </div>
        )
    }
}

export default Date;