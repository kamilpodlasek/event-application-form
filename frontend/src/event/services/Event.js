export class Event {
    constructor(HttpService) {
        this.HttpService = HttpService;
    }

    createEvent(event) {
        return this.HttpService.POST('event', event);
    }
}
