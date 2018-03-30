import React, { Component } from 'react';
import './TasksColumn.css';
import TitleField from './title-field/TitleField';
import Task from './task/Task';
import CreateTask from './create-task/CreateTask';

class TasksColumn extends Component {

    constructor(props) {
        super(props);
        this.state = {tasks: [], nextTaskId: 0};

        this.onTaskAdded = this.onTaskAdded.bind(this);
        this.drop = this.drop.bind(this);
        this.allowDrop = this.allowDrop.bind(this);
        this.onTaskLifted = this.onTaskLifted.bind(this);
    }

    onTaskAdded(task) {
        task.id = this.state.nextTaskId;

        this.setState({
            tasks: this.state.tasks.concat(task),
            nextTaskId: this.state.nextTaskId++ 
        });
    }
    
    drop(e) {
        e.preventDefault();
        const task = JSON.parse(e.dataTransfer.getData("task"));
        this.onTaskAdded(task);
    }

    allowDrop(e) {
        e.preventDefault();
    }

    onTaskLifted(taskId) {
        console.log(taskId);
        // const updatedTasks = this.state.tasks.filter((task) => {
        //     return task.id !== taskId;
        // });

        // this.setState({
        //     tasks: updatedTasks
        // });
    }

    render() {
    const createTaskComponent = this.props.isTodoColumn ? (<CreateTask onTaskCreated={this.onTaskAdded}/>) : null;
        return (
        <div className="TasksColumn" onDrop={this.drop} onDragOver={this.allowDrop}>
            <TitleField title={this.props.title}/>
            <h1>{this.state.task && this.state.task.title}</h1>
            {this.state.tasks.map((task) => {
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