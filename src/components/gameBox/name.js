import React, {Component} from 'react';

class Name extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div key={this.props.index} className="name">
                <h1 className="title">{this.props.title}</h1>
            </div>
        )
    }
}

export default Name;