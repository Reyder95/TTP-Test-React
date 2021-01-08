import React, { Component } from 'react'
import NameDisplay from './NameDisplay';

class Person extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props);
        return (
            <div className="personcomponent">
                <NameDisplay name={this.props.name}/>
                <p>Age: {this.props.age}</p>
                <p>Phone Number: {this.props.phone}</p>
            </div>
        )
    }
}

export default Person;