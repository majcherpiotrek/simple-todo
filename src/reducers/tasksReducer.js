import * as ACTION_TYPES from '../actions/actionTypes';

export function tasksReducer(state = [], action) {

    switch (action.type) {

        case ACTION_TYPES.CREATE_TASK:
            return [
                    ...state,
                    {
                        id: state.length.toString(),
                        title: action.title,
                        text: action.text,
                        columnId: action.columnId
                    }
                ];
        
        case ACTION_TYPES.MOVE_TASK_TO_ANOTHER_COLUMN:
            let tasks = state.slice();
            let taskToUpdate = tasks.find(task => task.id === action.taskId);
            if (taskToUpdate) {
                taskToUpdate.columnId = action.columnId;
            }
            return tasks;

        case ACTION_TYPES.DELETE_TASK:
            return state.filter(task => task.id !== action.taskId);
            
        default:
            return state;  
    }
};