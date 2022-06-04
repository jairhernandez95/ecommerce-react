import axios from 'axios'

const baseURL = 'https://rickandmortyapi.com/api/character'

const getData = async (name = '') => {
  const setName = name ? `/name/${name}` : '/all'
  const req = await axios.get(baseURL + setName)
  const res = req
  return res
}

export { getData }
