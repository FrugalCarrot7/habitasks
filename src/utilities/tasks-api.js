import sendRequest from './send-request';
const BASE_URL = '/api/tasks'

export function addATask (selectedProperty, selectedRoom, taskForm) {
    return sendRequest(`${BASE_URL}/property/${selectedProperty}/room/${selectedRoom}`, 'POST', taskForm);
}

export function getOneRoom (selectedProperty, selectedRoom) {
    return sendRequest(`${BASE_URL}/property/${selectedProperty}/room/${selectedRoom}`)
}