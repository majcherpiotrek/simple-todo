import React, { Component } from 'react';
import './CreateTask.css';

class CreateTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskTitle: '',
            taskText: ''
        }

        this.onTitleInputChange = this.onTitleInputChange.bind(this);
        this.onTextInputChange = this.onTextInputChange.bind(this);
        this.onTaskCreated = this.onTaskCreated.bind(this);
    }

    onTitleInputChange(e) {
        this.setState({
            taskTitle: e.target.value
        });
    }

    onTextInputChange(e) {
        this.setState({
            taskText: e.target.value
        });
    }

    onTaskCreated(e) {
        const task = {
            title: this.state.taskTitle,
            text: this.state.taskText
        };

        this.setState({
            taskTitle: '',
            taskText: ''
        });

        this.props.onTaskCreated(task);
    
        e.preventDefault();
    }

    render() {
        return (
            <div className="CreateTask">
                <input type="text" value={this.state.taskTitle} onChange={this.onTitleInputChange}/>
                <textarea value={this.state.taskText} onChange={this.onTextInputChange}></textarea>
                <button onClick={this.onTaskCreated}>Create task</button>
            </div>
        );
    }
}

export default CreateTask;