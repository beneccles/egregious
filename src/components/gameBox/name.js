import React, {Component} from 'react';

class Name extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1 key={this.props.index} className="title gameBoxText">{this.props.title}</h1>
        )
    }
}

export default Name;