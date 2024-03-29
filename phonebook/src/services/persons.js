import axios from 'axios'

const baseUrl = '/api/persons'
// const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(response => response.data)
}

const create = (newPersonObj) => {
    return axios
        .post(baseUrl, newPersonObj)
        .then(response => response.data)
}

const deleteEntrie = (id) => {
    return axios
        .delete(`${baseUrl}/${id}`)
        .then(response => response.data)
}

const update = (id, newPersonObj) => {
    return axios
        .put(`${baseUrl}/${id}`, newPersonObj)
        .then(response => response.data)
}

export default { getAll, create, deleteEntrie, update }