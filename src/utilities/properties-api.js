import sendRequest from './send-request';
const BASE_URL = '/api/properties'

export function getAllProperties() {
    return sendRequest(`${BASE_URL}/index`);
}

export function addAProperty (propertyForm) {
    return sendRequest(`${BASE_URL}/create`, 'POST', propertyForm);
}

export function deleteProperty (house) {
    return sendRequest(`${BASE_URL}/delete/${house}`, 'DELETE');
}

export function updateAProperty (house, updatePropertyData) {
    return sendRequest(`${BASE_URL}/${house}`, 'PUT', updatePropertyData)
}