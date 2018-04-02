import './Task.css';

import React from 'react';

function Task({title, text, isDone, onDrag}){
    return (
            <div className={`Task ${isDone ? 'done' : ''}`} draggable="true" onDragStart={onDrag}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        );
}

export default Task;