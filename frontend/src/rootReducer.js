import { combineReducers } from 'redux';

import { event } from './event/reducers/eventReducer';

export const rootReducer = combineReducers({
    event,
});
