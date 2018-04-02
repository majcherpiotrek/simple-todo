import './TodoBoard.css';

import React from 'react';
import TasksColumnContainer from '../../containers/TasksColumnContainer';

function TodoBoard({columns}) {
  return (
    <div className="TodoBoard">
      {columns.map((column) => {
        return <TasksColumnContainer 
                  key={column.id}
                  columnId={column.id}
                  title={column.title}
                  creatingTasksEnabled={column.creatingTasksEnabled}/>
      })}
    </div>
  );
};

export default TodoBoard;