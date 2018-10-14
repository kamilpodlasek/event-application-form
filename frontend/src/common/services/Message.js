export class Message {
    constructor(MessageProvider) {
        this.MessageProvider = MessageProvider;
    }

    showInfo(text) {
        this.MessageProvider.info(text);
    }

    showSuccess(text) {
        this.MessageProvider.success(text);
    }

    showError(text) {
        this.MessageProvider.error(text);
    }
}
