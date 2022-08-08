import sendRequest from './send-request';
const BASE_URL = '/api/properties'

export function getAllProperties() {
    return sendRequest(`${BASE_URL}/user`);
}