import React, { Component } from 'react';
import './TaskSlot.css';
import Task from './task/Task'
class TaskSlot extends Component {

    constructor(props) {
        super(props);

        if (props.task) {
            const task = <Task title={this.props.task.title} description={this.props.task.description} />
            this.state = {content: task};
        } else {
            this.state = {content: null};
        }
        
        
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    onDragOver(e) {
        e.preventDefault();
    }

    onDrop(e) {
        e.preventDefault();
        const task = e.dataTransfer && e.dataTransfer.getData('task');
        if (task) {
            this.setState(
                {
                    content: task
                }
            );
        }
    }

    render() {
        return (
        <div className="TaskSlot" onDrop={this.onDrop} onDragOver={this.onDragOver}>
            {this.state.content}
        </div>
        );
    }
}

export default TaskSlot;