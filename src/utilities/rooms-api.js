import sendRequest from './send-request';
const BASE_URL = '/api/rooms'

export function addARoom (selectedProperty, roomForm) {
    return sendRequest(`${BASE_URL}/property/${selectedProperty}/rooms`, 'POST', roomForm);
}

// export function getAllRooms (selectedProperty) {
//     return sendRequest(`${BASE_URL}/index`)
// }