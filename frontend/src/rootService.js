import { message } from 'antd';

import { Http } from './common/services/Http';
import { Message } from './common/services/Message';
import { Event } from './event/services/Event';

const HttpService = new Http();
const MessageService = new Message(message);
const EventService = new Event(HttpService);

export const services = {
    HttpService,
    MessageService,
    EventService,
};
