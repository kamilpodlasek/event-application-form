import { ActionsObservable } from 'redux-observable';
import { toArray } from 'rxjs/operators';

import {
    createEventRequestedEpic,
    createEventSucceededEpic,
    createEventFailedEpic,
} from '../createEventEpic';
import {
    CREATE_EVENT_REQUESTED,
    CREATE_EVENT_SUCCEEDED,
    CREATE_EVENT_FAILED,
} from '../../actions/eventActions';

describe('createEventEpic', () => {
    const MessageService = { showSuccess: jest.fn(), showError: jest.fn() };
    const payloadSuccess = { message: 'success' };
    const payloadError = { message: 'error' };

    describe('createEventRequestedEpic', () => {
        const EventService = { createEvent: jest.fn() };
        const action$ = ActionsObservable.of({ type: CREATE_EVENT_REQUESTED });
        const epic$ = createEventRequestedEpic(action$, {}, { EventService });

        it('should dispatch createEventSucceeded on success', async () => {
            EventService.createEvent.mockReturnValue(Promise.resolve(payloadSuccess));

            const result = await epic$.pipe(toArray()).toPromise();

            expect(result).toEqual([{ type: CREATE_EVENT_SUCCEEDED, payload: payloadSuccess }]);
        });

        it('should dispatch createEventFailed on error', async () => {
            EventService.createEvent.mockReturnValue(Promise.reject(payloadError));

            const result = await epic$.pipe(toArray()).toPromise();

            expect(result).toEqual([{ type: CREATE_EVENT_FAILED, payload: payloadError }]);
        });
    });

    describe('createEventSucceededEpic', () => {
        const action$ = ActionsObservable.of({
            type: CREATE_EVENT_SUCCEEDED,
            payload: payloadSuccess,
        });
        const epic$ = createEventSucceededEpic(action$, {}, { MessageService });

        it('should call showSuccess method of MessageService', async () => {
            await epic$.pipe(toArray()).toPromise();

            expect(MessageService.showSuccess).toHaveBeenCalledWith(payloadSuccess.message);
        });

        it('should not dispatch any action', async () => {
            const result = await epic$.pipe(toArray()).toPromise();

            expect(result).toEqual([]);
        });
    });

    describe('createEventFailedEpic', () => {
        const action$ = ActionsObservable.of({
            type: CREATE_EVENT_FAILED,
            payload: payloadError,
        });
        const epic$ = createEventFailedEpic(action$, {}, { MessageService });

        it('should call showError method of MessageService', async () => {
            await epic$.pipe(toArray()).toPromise();

            expect(MessageService.showError).toHaveBeenCalledWith(payloadError.message);
        });

        it('should not dispatch any action', async () => {
            const result = await epic$.pipe(toArray()).toPromise();

            expect(result).toEqual([]);
        });
    });
});
