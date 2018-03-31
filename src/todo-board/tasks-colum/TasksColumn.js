import './TasksColumn.css';

import React from 'react';
import TitleField from './title-field/TitleField';
import Task from './task/Task';
import CreateTask from './create-task/CreateTask';

function TasksColumn(props) {

    function onTaskLifted(e, taskId) {
        props.onTaskLifted(e, props.data.id, taskId);
    }

    const createTaskComponent = props.data.creatingTasksEnabled ? 
                                    (<CreateTask onTaskCreated={(task) => props.onTaskCreated(props.data.id, task)}/>) 
                                    : null;
    
    const tasks = props.data.tasks.map((task) => {
        return (
            <Task taskDone={props.data.id === 'done'} key={task.id} task={task} onTaskLifted={onTaskLifted}/>
        );
    });
    return (
        <div className="TasksColumn" 
            onDrop={(e) => props.onTaskDropped(e, props.data.id)}
            onDragOver={(e) => e.preventDefault()}>
                <TitleField title={props.data.title}/>
                {createTaskComponent}
                <div className="tasks-list">{tasks}</div>
        </div>
    );
    
}

export default TasksColumn;