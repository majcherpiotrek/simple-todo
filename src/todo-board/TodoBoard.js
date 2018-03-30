import React, { Component } from 'react';
import TasksColumn from './tasks-colum/TasksColumn'
import './TodoBoard.css';

class TodoBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {todo: [], inProgress: [], done:[]};
  }

  render() {

    return (
      <div className="TodoBoard">
        <TasksColumn title={'To do'} isTodoColumn={true}/>
        <TasksColumn title={'In progress'}/>
        <TasksColumn title={'Done'}/>
      </div>
    );
  }
}

export default TodoBoard;