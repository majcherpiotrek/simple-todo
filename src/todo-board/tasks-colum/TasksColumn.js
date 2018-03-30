import React, { Component } from 'react';
import './TasksColumn.css';
import TitleField from './title-field/TitleField';
import Task from './task/Task';
import CreateTask from './create-task/CreateTask';

class TasksColumn extends Component {

    constructor(props) {
        super(props);
        this.onTaskCreated = this.onTaskCreated.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onTaskLifted = this.onTaskLifted.bind(this);
    }

    allowDrop(e) {
        e.preventDefault();
    }

    onTaskCreated(task) {
        this.props.onTaskCreated(this.props.data.id, task);
    }

    onDrop(e) {
        this.props.onTaskDropped(e, this.props.data.id);
    }

    onTaskLifted(e, taskId) {
        this.props.onTaskLifted(e, this.props.data.id, taskId);
    }

    render() {
    const createTaskComponent = this.props.data.creatingTasksEnabled ? (<CreateTask onTaskCreated={this.onTaskCreated}/>) : null;
        return (
        <div className="TasksColumn" onDrop={this.onDrop} onDragOver={this.allowDrop}>
            <TitleField title={this.props.data.title}/>
            {this.props.data.tasks.map((task) => {
                return (
                    <Task key={task.id} task={task} onTaskLifted={this.onTaskLifted}/>
                );
            })}
            {createTaskComponent}
        </div>
        );
    }
}

export default TasksColumn;