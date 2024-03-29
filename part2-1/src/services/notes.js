import axios from 'axios'

// const baseUrl = 'http://localhost:3001/api/notes'
// removed domain because we deploy built files
// that contains in the same directory that our backend
// so it is automaticly add localhost:port before /api/notes
const baseUrl = '/api/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default {
    getAll,
    create,
    update
}