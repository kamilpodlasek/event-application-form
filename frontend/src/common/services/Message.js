import { message } from 'antd';

export class Message {
    showInfo(text) {
        message.info(text);
    }

    showSuccess(text) {
        message.success(text);
    }

    showError(text) {
        message.error(text);
    }
}
