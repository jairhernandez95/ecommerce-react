import axios from 'axios'

const baseURL = 'https://rickandmortyapi.com/api/character'

const getData = async (id = '') => {
  const setId = id ? `/${id}` : ''
  const req = await axios.get(baseURL + setId)
  const res = req
  return res
}

export { getData }
