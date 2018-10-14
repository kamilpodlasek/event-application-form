import { Http } from '../Http';
import { api } from '../../../config';

describe('HttpService', () => {
    const HttpService = new Http();
    const path = 'path';
    const resSuccess = { message: 'success' };
    const resError = { message: 'error' };
    const headers = { 'Content-Type': 'application/json' };

    const fetchSuccess = jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => resSuccess,
        }),
    );
    const fetchError = jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: false,
            json: () => resError,
        }),
    );

    ['GET', 'DELETE'].forEach(method => {
        describe(method + ' method', () => {
            const options = {
                method,
                headers,
            };

            it('should make request with correct params', () => {
                global.fetch = fetchSuccess;

                HttpService[method](path).then(() =>
                    expect(global.fetch).toHaveBeenCalledWith(api + path, options),
                );
            });

            describe('should return the correct response', () => {
                it('if there is a success', () => {
                    global.fetch = fetchSuccess;

                    HttpService[method](path).then(result => expect(result).toEqual(resSuccess));
                });

                it('if there is an error', () => {
                    global.fetch = fetchError;

                    HttpService[method](path).catch(err => expect(err).toEqual(resError));
                });
            });
        });
    });

    ['POST', 'PUT'].forEach(method => {
        describe(method + ' method', () => {
            const body = { a: 'c', b: 1 };
            const options = {
                body: body && JSON.stringify(body),
                method,
                headers,
            };

            it('should make request with correct params', () => {
                global.fetch = fetchSuccess;

                HttpService[method](path, body).then(() =>
                    expect(global.fetch).toHaveBeenCalledWith(api + path, options),
                );
            });

            describe('should return the correct response', () => {
                it('if there is a success', () => {
                    global.fetch = fetchSuccess;

                    HttpService[method](path, body).then(result => expect(result).toEqual(resSuccess));
                });

                it('if there is an error', () => {
                    global.fetch = fetchError;

                    HttpService[method](path, body).catch(err => expect(err).toEqual(resError));
                });
            });
        });
    });
});
