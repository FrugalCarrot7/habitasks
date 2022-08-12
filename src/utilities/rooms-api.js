import sendRequest from './send-request';
const BASE_URL = '/api/rooms'

export function addARoom (roomForm) {
    return sendRequest(`${BASE_URL}/create`, 'POST', roomForm);
}