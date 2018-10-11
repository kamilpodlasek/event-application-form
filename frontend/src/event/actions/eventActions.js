export const CREATE_EVENT_REQUESTED = 'CREATE_EVENT_REQUESTED';
export const createEventRequest = event => ({ type: CREATE_EVENT_REQUESTED, payload: event });

export const CREATE_EVENT_SUCCEEDED = 'CREATE_EVENT_SUCCEEDED';
export const createEventSucceeded = res => ({ type: CREATE_EVENT_SUCCEEDED, payload: res });

export const CREATE_EVENT_FAILED = 'CREATE_EVENT_FAILED';
export const createEventFailed = err => ({ type: CREATE_EVENT_FAILED, payload: err });
