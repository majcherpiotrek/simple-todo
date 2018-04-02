import './TasksColumn.css';
import React from 'react';
import TitleField from './title-field/TitleField';
import CreateTaskContainer from '../../containers/CreateTaskContainer';
import TaskContainer from '../../containers/TaskContainer';

function TasksColumn({tasks, title, creatingTasksEnabled, onDragOver, onDrop}) {
    return (
        <div className="TasksColumn" 
            onDrop={(e) => onDrop(e)}
            onDragOver={(e) => onDragOver(e)}>
                <div className="top-area">
                    <TitleField title={title}/>
                    {creatingTasksEnabled ? <CreateTaskContainer/> : null}
                </div>
                <div className="tasks-list">
                    {tasks.map(
                        task => <TaskContainer 
                                    key={task.id}
                                    task={task}/>
                    )}
                </div>
        </div>
    );
}

export default TasksColumn;