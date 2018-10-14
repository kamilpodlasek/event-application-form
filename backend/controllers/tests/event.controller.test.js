const { mockEventModelSuccess, mockEventModelError } = require('../../helpers/mocks/event.model.mocks');

describe('event controller', () => {
    const send = jest.fn();
    const res = { send, status: jest.fn().mockImplementation(() => ({ send })) };
    const req = { body: { firstName: 'name' }, params: { id: 0 } };

    const event = { firstName: 'name' };
    const eventsAll = [{ firstName: 'name1' }, { firstName: 'name2' }];

    beforeEach(jest.resetModules);

    latestCall = () => send.mock.calls.pop()[0];

    describe('create method', () => {
        describe('should handle event save error', () => {
            const { create } = mockEventModelError();

            it('and return 400', async () => {
                await create(req, res);

                expect(res.status).toHaveBeenCalledWith(400);
            });

            it('and return valid error', async () => {
                await create(req, res);

                expect(latestCall().message).toEqual('err');
            });
        });

        it('should handle event save success', async () => {
            const { create } = mockEventModelSuccess();

            await create(req, res);

            expect(latestCall().message).toEqual('Event application saved!');
        });
    });

    describe('getAll method', () => {
        describe('should handle events find error', () => {
            const { getAll } = mockEventModelError();

            it('and return 400', async () => {
                await getAll(null, res);

                expect(res.status).toHaveBeenCalledWith(400);
            });

            it('and return valid error', async () => {
                await getAll(null, res);

                expect(latestCall().message).toEqual('err');
            });
        });

        it('should handle events find success', async () => {
            const { getAll } = mockEventModelSuccess();

            await getAll(null, res);

            expect(latestCall()).toEqual(eventsAll);
        });
    });

    describe('getOne method', () => {
        describe('should handle event find error', () => {
            const { getOne } = mockEventModelError();

            it('and return 400', async () => {
                await getOne(req, res);

                expect(res.status).toHaveBeenCalledWith(400);
            });

            it('and return valid error', async () => {
                await getOne(req, res);

                expect(latestCall().message).toEqual('err');
            });
        });

        it('should handle event find success', async () => {
            const { getOne } = mockEventModelSuccess();

            await getOne(req, res);

            expect(latestCall()).toEqual(event);
        });
    });

    describe('update method', () => {
        describe('should handle event find error', () => {
            const { update } = mockEventModelError();

            it('and return 400', async () => {
                await update(req, res);

                expect(res.status).toHaveBeenCalledWith(400);
            });

            it('and return valid error', async () => {
                await update(req, res);

                expect(latestCall().message).toEqual('err');
            });
        });

        it('should handle event find success', async () => {
            const { update } = mockEventModelSuccess();

            await update(req, res);

            expect(latestCall().message).toEqual('Event application updated!');
        });
    });

    describe('remove method', () => {
        describe('should handle event find error', () => {
            const { remove } = mockEventModelError();

            it('and return 400', async () => {
                await remove(req, res);

                expect(res.status).toHaveBeenCalledWith(400);
            });

            it('and return valid error', async () => {
                await remove(req, res);

                expect(latestCall().message).toEqual('err');
            });
        });

        it('should handle event find success', async () => {
            const { remove } = mockEventModelSuccess();

            await remove(req, res);

            expect(latestCall().message).toEqual('Event application removed!');
        });
    });
});
