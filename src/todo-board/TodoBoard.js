import './TodoBoard.css';

import React, { Component } from 'react';
import TasksColumn from './tasks-colum/TasksColumn'

class TodoBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns : [
        {
          id: 'todo',
          title: 'To do',
          tasks: [],
          creatingTasksEnabled: true,
        },
        {
          id: 'inProgress',
          title: 'In progress',
          tasks: [],
          creatingTasksEnabled: false
        },
        {
          id: 'done',
          title: 'Done',
          tasks: [],
          creatingTasksEnabled: false
        }
      ],

      taskInMotion: {originColumnId: null, task: null},
      nextTaskId: 0
    };

    this.onTaskLifted = this.onTaskLifted.bind(this);
    this.onTaskDropped = this.onTaskDropped.bind(this);
    this.onTaskCreated = this.onTaskCreated.bind(this);
  }

  onTaskLifted(evt, columnId, taskId) {
    const column = this.state.columns.find((column) => {
      return column.id === columnId;
    });

    const task = column.tasks.find((task) => {
      return task.id === taskId;
    });

    this.setState({
      taskInMotion: {originColumnId: columnId, task: task}
    });
  }

  onTaskDropped(evt, columnId) {
    evt.preventDefault();
    if (columnId === this.state.taskInMotion.originColumnId) {
      this.setState({
        taskInMotion: {originColumnId: null, task: null}
      });
    } else {
      let columns = this.state.columns.slice();

      /* Remove task from origin column */
      let originColumn = columns.find((column) => {
                return column.id === this.state.taskInMotion.originColumnId;
              });
      originColumn.tasks = originColumn.tasks.filter((task) => {
                              return task.id !== this.state.taskInMotion.task.id;
                            });

      /* Add new task to destination column */
      let destinationColumn = columns.find((column) => {
                                return column.id === columnId;
                              });
      destinationColumn.tasks.push(this.state.taskInMotion.task);

      this.setState({
        columns: columns,
        taskInMotion: {originColumnId: null, task: null}
      });
    }
  }

  onTaskCreated(columnId, task) {
    task.id = columnId.concat(this.state.nextTaskId.toString());

    let columns = this.state.columns.slice();
    let destinationColumn = columns.find((column) => {
                              return column.id === columnId;
                            });
    destinationColumn.tasks.push(task);

    this.setState({
      columns: columns,
      nextTaskId: this.state.nextTaskId + 1
    });
  }

  render() {
    return (
      <div className="TodoBoard">
        {this.state.columns.map((column) => {
          return <TasksColumn 
                    key={column.id}
                    data={column}
                    onTaskLifted={this.onTaskLifted}
                    onTaskDropped={this.onTaskDropped}
                    onTaskCreated={this.onTaskCreated}/>
        })}
      </div>
    );
  }
}

export default TodoBoard;