import './Task.css';

import React from 'react';

function Task(props) {

    function onDrag(e) {
        props.onTaskLifted(e, props.task.id); 
    }

    return (
        <div className={`Task ${props.taskDone ? 'done' : ''}`} draggable="true" onDragStart={onDrag}>
            <h2>{props.task.title}</h2>
            <p>{props.task.text}</p>
        </div>
        );
}

export default Task;