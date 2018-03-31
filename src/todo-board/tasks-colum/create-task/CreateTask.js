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
        this.onKeyDown = this.onKeyDown.bind(this);
        this.TAB_KEY_CODE = 9;
        this.ENTER_KEY_CODE = 13;
        this.ARROW_UP_KEY_CODE = 38;
        this.ARROW_DOWN_KEY_CODE = 40;
    }

    componentDidMount() {
        this.refs.topBarButton.focus();
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
         setTimeout(() => {
            this.setState({
                taskTitle: '',
                taskText: '',
                expanded: false
            });
            this.refs.topBarButton.focus();
        }, 100);

    }

    handleExpand() {
        if (!this.state.expanded) {
            this.refs.titleInput.focus();
        }

        this.setState({
            expanded: !this.state.expanded
        });
    }

    onKeyDown(e) {
        let keyCode = e.keyCode;
        switch(e.currentTarget) {
            case this.refs.textarea:
                if (keyCode === this.TAB_KEY_CODE || keyCode === this.ARROW_DOWN_KEY_CODE) {
                    e.preventDefault();
                    this.refs.doneButton.focus();
                } else if (keyCode === this.ARROW_UP_KEY_CODE) {
                    e.preventDefault();
                    this.refs.titleInput.focus();
                }
                break;
            
            case this.refs.titleInput:
                if (keyCode === this.ARROW_DOWN_KEY_CODE) {
                    this.refs.textarea.focus();
                } else if (keyCode === this.ARROW_UP_KEY_CODE) {
                    this.refs.topBarButton.focus();
                }
                break;
            
            case this.refs.doneButton:
                if (keyCode === this.ARROW_UP_KEY_CODE) {
                    this.refs.textarea.focus();
                } else if (keyCode === this.TAB_KEY_CODE) {
                    e.preventDefault();
                    this.refs.topBarButton.focus();
                }
                break;

            case this.refs.topBarButton:
                if (keyCode === this.TAB_KEY_CODE) {
                    e.preventDefault();
                    if (!this.state.expanded) {
                        this.handleExpand();
                    } else {
                        this.refs.titleInput.focus();
                    }
                }   
                break;
            
            default:
                return;
        }
    }

    render() {
        return (
            <div className="CreateTask">
                <button ref="topBarButton" className="top-bar-button" onClick={this.handleExpand} onKeyDown={this.onKeyDown}>
                    <div className="top-bar">
                        <div>
                            <h5>Create new task</h5>
                        </div>
                        <img src={this.state.expanded ? arrow_up : arrow_down} alt={this.state.expanded ? "arrow-up" : "arrow-down"}/>
                    </div>
                </button>
                
                <div className={`expandable ${this.state.expanded ? '' : 'hidden'}`}>
                    <div className="content">
                        <input 
                            type="text"
                            ref="titleInput"
                            value={this.state.taskTitle}
                            onChange={this.onTitleInputChange}
                            onKeyDown={this.onKeyDown}
                            placeholder="Give your task a title ..."/>
                        <textarea
                            ref="textarea" 
                            rows="4"
                            value={this.state.taskText}
                            onChange={this.onTextInputChange}
                            onKeyDown={this.onKeyDown}
                            placeholder="Describe your task ..."></textarea>
                        <button ref="doneButton" onKeyDown={this.onKeyDown} onClick={this.onTaskCreated}>
                            <div className="button">
                                <span>Done</span>
                                <img src={done} alt="icon-done"/> 
                            </div>
                        </button>
                        <div className="divider"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateTask;