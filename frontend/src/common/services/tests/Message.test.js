import { Message } from '../Message';

describe('MessageService', () => {
    const MesasgeProvider = { info: jest.fn(), success: jest.fn(), error: jest.fn() };
    const MessageService = new Message(MesasgeProvider);
    const message = 'message';

    it('should use MesasgeProvider after calling showInfo', () => {
        MessageService.showInfo(message);

        expect(MesasgeProvider.info).toHaveBeenCalledWith(message);
    });

    it('should use MesasgeProvider after calling showSuccess', () => {
        MessageService.showSuccess(message);

        expect(MesasgeProvider.success).toHaveBeenCalledWith(message);
    });

    it('should use MesasgeProvider after calling showError', () => {
        MessageService.showError(message);

        expect(MesasgeProvider.error).toHaveBeenCalledWith(message);
    });
});
