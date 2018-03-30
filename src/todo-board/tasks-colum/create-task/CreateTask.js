import './CreateTask.css';

import React, { Component } from 'react';
import iconPlus from '../../../img/iconPlus.svg'

class CreateTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskTitle: '',
            taskText: '',
            expanded: false
        }

        this.onTitleInputChange = this.onTitleInputChange.bind(this);
        this.onTextInputChange = this.onTextInputChange.bind(this);
        this.onTaskCreated = this.onTaskCreated.bind(this);
        this.handleExpand = this.handleExpand.bind(this);
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
    }

    handleExpand() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        return (
            <div className="CreateTask">
                <div className="top-bar">
                    <div>
                        <h4>Create new task</h4>
                    </div>
                    <img src={iconPlus} onClick={this.handleExpand}/>
                </div>
                <div className={`expandable ${this.state.expanded ? '' : 'hidden'}`}>
                    <div className="content">
                        <input type="text" value={this.state.taskTitle} onChange={this.onTitleInputChange}/>
                        <textarea value={this.state.taskText} onChange={this.onTextInputChange}></textarea>
                        <button onClick={this.onTaskCreated}>Create task</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateTask;