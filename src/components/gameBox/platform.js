import React, {Component} from 'react';

class Platform extends Component {
    constructor(props) {
        super(props)
    }

    renderPlats(){
        let newArr = [];
        console.log(typeof this.props.platforms)
        // Platforms comes to us as an array of objects, but we only need to grab the name property
        // from each item in the array. Lets run through the array using a for loop.
        for (let i = 0; i < this.props.platforms.length; i++){
            newArr.push(<li> {this.props.platforms[i].name} </li>)
        }
    }
    render() {
        return (
            <div className="platform">
                <list>
                    {this.renderPlats()}
                </list>
            </div>
        )
    }
}

export default Platform;