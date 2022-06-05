import axios from 'axios'

const baseURL = 'https://rickandmortyapi.com/api/character'

const getData = async (character = '') => {
  const setName = character ? `/character/${character}` : ''
  const req = await axios.get(baseURL + setName)
  const res = req
  return res
}

export { getData }
