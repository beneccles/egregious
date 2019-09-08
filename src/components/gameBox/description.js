import React, {Component} from 'react';

class Description extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="description">
                {/* Description comes with HTML tags from the API */}
                {this.props.description}
            </div>
        )
    }
}

export default Description;