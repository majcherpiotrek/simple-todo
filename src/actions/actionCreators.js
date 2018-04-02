import * as ACTION_TYPES from './actionTypes';

export function createTask(title, text, columnId) {
    return {
        type: ACTION_TYPES.CREATE_TASK,
        title: title,
        text: text,
        columnId: columnId
    };
};

export function moveTaskToAnotherColumn(taskId, columnId) {
    return {
        type: ACTION_TYPES.MOVE_TASK_TO_ANOTHER_COLUMN,
        taskId: taskId,
        columnId: columnId
    };
};

export function deleteTask(taskId) {
    return {
        type: ACTION_TYPES.DELETE_TASK,
        taskId: taskId
    };
};