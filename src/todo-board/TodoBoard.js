import React, { Component } from 'react';
import TasksColumn from './tasks-colum/TasksColumn'
import './TodoBoard.css';
import Task from './tasks-colum/task-slot/task/Task';

class TodoBoard extends Component {
  render() {
    const task = {'title':'Task title'}

    return (
      <div className="TodoBoard">
        <TasksColumn title={'To do'} task={task}/>
        <TasksColumn title={'In progress'}/>
        <TasksColumn title={'Done'}/>
      </div>
    );
  }
}

export default TodoBoard;