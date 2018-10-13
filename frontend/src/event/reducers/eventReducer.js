import { CREATE_EVENT_REQUESTED } from '../actions/eventActions';

const defaultState = {
    firstName: '',
    lastName: '',
    email: '',
    date: null,
};

export const event = (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_EVENT_REQUESTED:
            return action.payload;
        default:
            return state;
    }
};
