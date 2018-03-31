import './TitleField.css';

import React from 'react';

function TitleField(props) {
    return (
        <div className="TitleField">
            <h3>{props.title}</h3>
        </div>
    );  
}

export default TitleField;