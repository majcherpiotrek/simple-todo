import React, { Component } from 'react';
import './Task.css';

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.task.title,
            text: this.props.task.text
        };

        this.onDrag = this.onDrag.bind(this);
    }

    onDrag(e) {
        const task = {
            title: this.state.title,
            text: this.state.text
        };
        e.dataTransfer.setData("task", JSON.stringify(task));
        this.props.onTaskLifted(this.props.task.id);
    }

    render() {
        return (
        <div className="Task" draggable="true" onDragStart={this.onDrag}>
            <h2>{this.state.title}</h2>
            <p>{this.state.text}</p>
        </div>
        );
    }
}

export default Task;