import * as ACTION_TYPES from '../actions/actionTypes';
import { columnsConfig } from '../business-config/columnsConfig';

export function columnsReducer(state = columnsConfig, action) {

    switch (action.type) {
        default:
            return state;
    }
};