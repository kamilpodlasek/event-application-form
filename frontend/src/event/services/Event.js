export class Event {
    constructor(HttpService, MessageService) {
        this.HttpService = HttpService;
        this.MessageService = MessageService;
    }

    createEvent(event) {
        return this.HttpService.POST('event', event);
    }
}
