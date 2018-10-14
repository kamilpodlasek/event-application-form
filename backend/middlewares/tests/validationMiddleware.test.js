const { eventValidationSchema } = require('common');
const validationMiddleware = require('../validationMiddleware');

const validate = validationMiddleware(eventValidationSchema);

describe('validationMiddleware', () => {
    const next = jest.fn();
    const send = jest.fn();
    const res = { status: jest.fn().mockImplementation(() => ({ send })) };
    const validData = { firstName: 'a', lastName: 'b', email: 'a@a.a', date: '2018-10-14' };

    it('should correctly validate valid data', async () => {
        const req = { body: validData };

        await validate(req, res, next);

        expect(next).toHaveBeenCalled();
    });

    describe('should correctly validate invalid data', () => {
        const req = { body: { ...validData, firstName: '' } };

        it('and return 400', async () => {
            await validate(req, res, next);

            expect(res.status).toHaveBeenCalledWith(400);
        });

        it('and return valid error', async () => {
            const err = 'First name is required';
            await validate(req, res, next);

            const receivedErr = send.mock.calls[0][0].message;

            expect(receivedErr).toEqual(err);
        });
    });
});
