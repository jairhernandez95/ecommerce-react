import { getData } from '../services/getProducts'
import { useEffect, useState } from 'react'

const useGetData = (id = '') => {
  const [listProducts, setListProducts] = useState([])
  const [nextItems, setNextItems] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const setData = async () => {
      try {
        const { data } = await getData(id)
        setListProducts(data.results)
        setNextItems(data.info.next)
        console.log(nextItems)
      } catch ({ message }) {
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    setData()
  }, [id])

  return { listProducts, loading, error, nextItems }
}

export default useGetData
