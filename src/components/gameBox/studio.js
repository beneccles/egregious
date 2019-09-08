import React, {Component} from 'react';

class Studio extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="studio">
                <h1>Studio: {this.props.studio}</h1>
            </div>
        )
    }
}

export default Studio;