import React, { Component } from 'react';
import './TitleField.css';

class TitleField extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="TitleField">
            <h1>{this.props.title}</h1>
        </div>
        );
    }
}

export default TitleField;