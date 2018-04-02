import './TitleField.css';

import React from 'react';

function TitleField({title}) {
    return (
        <div className="TitleField">
            <h3>{title}</h3>
        </div>
    );  
}

export default TitleField;