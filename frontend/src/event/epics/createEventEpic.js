import { ofType, combineEpics } from 'redux-observable';
import { pluck, mergeMap, ignoreElements, tap, throttleTime } from 'rxjs/operators';

import {
    CREATE_EVENT_REQUESTED,
    CREATE_EVENT_SUCCEEDED,
    CREATE_EVENT_FAILED,
    createEventSucceeded,
    createEventFailed,
} from '../actions/eventActions';

const createEventRequestedEpic = (action$, _state$, { EventService }) =>
    action$.pipe(
        ofType(CREATE_EVENT_REQUESTED),
        throttleTime(1000),
        pluck('payload'),
        mergeMap(event =>
            EventService.createEvent(event)
                .then(createEventSucceeded)
                .catch(createEventFailed),
        ),
    );

const createEventSucceededEpic = (action$, _state$, { MessageService }) =>
    action$.pipe(
        ofType(CREATE_EVENT_SUCCEEDED),
        pluck('payload'),
        tap(res => MessageService.showSuccess(res.message)),
        ignoreElements(),
    );

const createEventFailedEpic = (action$, _state$, { MessageService }) =>
    action$.pipe(
        ofType(CREATE_EVENT_FAILED),
        pluck('payload'),
        tap(err => MessageService.showError(err.message)),
        ignoreElements(),
    );

export const createEventEpic = combineEpics(
    createEventRequestedEpic,
    createEventSucceededEpic,
    createEventFailedEpic,
);
