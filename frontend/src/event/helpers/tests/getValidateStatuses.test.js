import { getValidateStatuses } from '../getValidateStatuses';

describe('getValidateStatuses', () => {
    it('should not set status for not touched fields', () => {
        const props = { touched: { a: false } };

        expect(getValidateStatuses(props)).toEqual({});
    });

    it('should set error status for touched fields present in errors object', () => {
        const props = { touched: { a: false, b: true }, errors: { a: 'err1', b: 'err2' } };

        expect(getValidateStatuses(props)).toEqual({ b: 'error' });
    });

    it('should set success status for touched fields not present in errors object', () => {
        const props = { touched: { a: true }, errors: {} };

        expect(getValidateStatuses(props)).toEqual({ a: 'success' });
    });
});
