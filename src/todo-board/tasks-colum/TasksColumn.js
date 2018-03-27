import React, { Component } from 'react';
import './TasksColumn.css';
import TitleField from './title-field/TitleField';
import TaskSlot from './task-slot/TaskSlot'

class TasksColumn extends Component {

    constructor(props) {
        super(props);
        this.state = {taskModel: this.props.task};
    }

    render() {
        

        return (
        <div className="TasksColumn">
            <TitleField title={this.props.title}/>
            <TaskSlot task={this.state.taskModel}/>
        </div>
        );
    }
}

export default TasksColumn;