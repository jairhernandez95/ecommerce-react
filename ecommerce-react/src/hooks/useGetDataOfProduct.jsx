import { getData } from '../services/getProducts'
import { useEffect, useState } from 'react'

const useGetData = (id = '') => {
  const [listProducts, setListProducts] = useState(id ? {} : [])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const setData = async () => {
      try {
        const { data } = await getData(id)
        setListProducts(data)
      } catch ({ message }) {
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    setData()
  }, [])

  return { listProducts, loading, error }
}

export default useGetData
