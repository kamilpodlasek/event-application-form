import {
    CREATE_EVENT_REQUESTED,
    CREATE_EVENT_SUCCEEDED,
    CREATE_EVENT_FAILED,
} from '../actions/eventActions';

const defaultState = {};

export const event = (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_EVENT_REQUESTED:
            return state;
        case CREATE_EVENT_SUCCEEDED:
            return state;
        case CREATE_EVENT_FAILED:
            return state;
        default:
            return state;
    }
};
