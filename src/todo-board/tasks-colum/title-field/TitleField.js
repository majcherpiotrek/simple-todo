import './TitleField.css';

import React, { Component } from 'react';

function TitleField(props) {
    return (
        <div className="TitleField">
            <h1>{props.title}</h1>
        </div>
    );  
}

export default TitleField;