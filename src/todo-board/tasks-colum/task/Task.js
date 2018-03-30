import React, { Component } from 'react';
import './Task.css';

class Task extends Component {

    constructor(props) {
        super(props);
        this.onDrag = this.onDrag.bind(this);
    }

    onDrag(e) {
        this.props.onTaskLifted(e, this.props.task.id);    
    }

    render() {
        return (
        <div className="Task" draggable="true" onDragStart={this.onDrag}>
            <h2>{this.props.task.title}</h2>
            <p>{this.props.task.text}</p>
        </div>
        );
    }
}

export default Task;