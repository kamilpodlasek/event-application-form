import { combineEpics } from 'redux-observable';

import { createEventEpic } from './event/epics/createEventEpic';

export const rootEpic = combineEpics(createEventEpic);
