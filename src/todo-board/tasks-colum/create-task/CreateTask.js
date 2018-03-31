import './CreateTask.css';

import React, { Component } from 'react';
import arrow_down from '../../../img/arrow_down.svg';
import arrow_up from '../../../img/arrow_up.svg';
import done from '../../../img/done.svg';

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
        e.preventDefault();
        this.setState({
            taskText: e.target.value
        });  
    }

    onTaskCreated() {
        const task = {
            title: this.state.taskTitle,
            text: this.state.taskText
        };

        this.props.onTaskCreated(task);
         setTimeout(this.setState({
            taskTitle: '',
            taskText: '',
            expanded: false
        }), 500);
    }

    handleExpand() {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        return (
            <div className="CreateTask">
                <div className="top-bar" onClick={this.handleExpand}>
                    <div>
                        <h5>Create new task</h5>
                    </div>
                    <img src={this.state.expanded ? arrow_up : arrow_down}/>
                </div>
                <div className={`expandable ${this.state.expanded ? '' : 'hidden'}`}>
                    <div className="content">
                        <input type="text"
                            value={this.state.taskTitle}
                            onChange={this.onTitleInputChange}
                            placeholder="Give your task a title ..."
                            autoFocus={this.state.expanded.toString()}/>
                        <textarea 
                            rows="4"
                            value={this.state.taskText}
                            onChange={this.onTextInputChange}
                            placeholder="Describe your task ..."></textarea>
                        <div className="button" onClick={this.onTaskCreated}>
                            <span>Done</span>
                            <img src={done}/> 
                        </div>
                        <div className="divider"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateTask;