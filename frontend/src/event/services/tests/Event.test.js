import { Event } from '../Event';

describe('EventService', () => {
    const HttpService = { POST: jest.fn() };
    const EventService = new Event(HttpService);

    it('should use HttpService after calling createEvent', () => {
        const event = {};

        EventService.createEvent(event);

        expect(HttpService.POST).toHaveBeenCalledWith('event', event);
    });
});
