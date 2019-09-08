import React, {Component} from 'react';

class Platform extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const platforms = this.props.platforms.map((platform, index) => <h1 key={index + platform.name}>{platform.name}</h1>)

        return (
            // <list key={this.props.index} className="platform">
            <div>
               {platforms}
            </div>
        )
    }
}

export default Platform;