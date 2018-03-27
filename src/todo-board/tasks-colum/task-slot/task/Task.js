import React, { Component } from 'react';
import './Task.css';

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {title: this.props.title};

        this.onDrag = this.onDrag.bind(this);
    }

    onDrag(e) {
        e.dataTransfer.setData('task', this.render());
    }
    render() {
        return (
        <div className="Task" draggable="true" onDragStart={this.onDrag}>
            <h2>{this.state.title}</h2>
        </div>
        );
    }
}

export default Task;