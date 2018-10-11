import { Http } from './common/services/Http';
import { Message } from './common/services/Message';
import { Event } from './event/services/Event';

const HttpService = new Http();
const MessageService = new Message();
const EventService = new Event(HttpService, MessageService);

export const services = {
    HttpService,
    MessageService,
    EventService,
};
