import React, {Component} from 'react';
import Date from './gameBox/date';
import Description from './gameBox/description';
import Name from './gameBox/name';
import Platform from './gameBox/platform';
import Screenshot from './gameBox/screenshots';
import Studio from './gameBox/studio';

class Gamebox extends Component {
    constructor(props) {
        super(props)

        this.rendDisplay = this.rendDisplay.bind(this);
    }

    rendDisplay() {
        console.log(this.props.displayArr)

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