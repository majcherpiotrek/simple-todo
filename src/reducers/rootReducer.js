import { combineReducers } from 'redux';
import { tasksReducer } from './tasksReducer';
import { columnsReducer } from './columnsReducer';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    columns: columnsReducer
});

export default rootReducer;