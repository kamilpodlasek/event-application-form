import { api } from '../../config';

export class Http {
    GET(path) {
        return this.makeRequest('GET', path);
    }

    POST(path, body) {
        return this.makeRequest('POST', path, body);
    }

    PUT(path, body) {
        return this.makeRequest('PUT', path, body);
    }

    DELETE(path) {
        return this.makeRequest('DELETE', path);
    }

    makeRequest(method, path, body) {
        const options = {
            body: body && JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
            method,
        };

        return fetch(api + path, options).then(res => res.json());
    }
}
